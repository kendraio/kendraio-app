async function sha256(data: string | ArrayBuffer): Promise<string> {
  let buf: ArrayBuffer;
  if (typeof data === 'string') {
    buf = new TextEncoder().encode(data);
  } else {
    buf = data;
  }
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hmacSha256(key: ArrayBuffer | string, data: string) {
  const rawKey = typeof key === 'string' ? new TextEncoder().encode(key) : key;
  const cryptoKey = await crypto.subtle.importKey(
    'raw', rawKey, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(data));
  return new Uint8Array(sig);
}

function toHex(arrayBuf: Uint8Array): string {
  return Array.from(arrayBuf).map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * URI encodes a string according to AWS SigV4 requirements
 * Only alphanumeric characters, '-', '_', '.', and '~' are not encoded
 */
function uriEncodeString(str: string): string {
  return encodeURIComponent(str).replace(/[!'()*]/g, c => 
    '%' + c.charCodeAt(0).toString(16).toUpperCase()
  );
}

function createCanonicalQueryString(searchParams: URLSearchParams): string {
  const paramPairs: Array<[string, string]> = [];
  
  // Extract all parameter pairs
  searchParams.forEach((value, key) => {
    paramPairs.push([key, value]);
  });
  
  // Sort by parameter name
  paramPairs.sort((a, b) => a[0].localeCompare(b[0]));
  
  // Create encoded string
  return paramPairs.map(pair => 
    `${uriEncodeString(pair[0])}=${uriEncodeString(pair[1])}`
  ).join('&');
}

export async function signAwsSigV4(method: string, requestUrl: string, payload: any, accessKeyId: string, secretKey: string) {
  const urlObj = new URL(requestUrl);
  const host = urlObj.host;
  // We'll guess the region/service from host if it looks like S3 pattern, else fallback
  // For Backblaze S3-compatible endpoints, they commonly embed region after 's3.'
  // e.g. bucket.s3.eu-central-003.backblazeb2.com => service 's3', region 'eu-central-003'
  const match = host.match(/^(?:[^.]+\.)?s3[.-]([^.]+)/);
  const region = match && match[1] ? match[1] : 'us-east-1';
  const service = 's3';
  // ISO8601 Basic Format, such as: "20250224T000000Z"
  const date = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const shortDate = date.slice(0, 8);

  // For SigV4, we hash the payload (or use an empty hash if none).
  let payloadStr = '';
  let payloadForHash: string | ArrayBuffer = '';
  
  if (payload && typeof payload === 'object' && !(payload instanceof ArrayBuffer)) {
    payloadStr = JSON.stringify(payload);
    payloadForHash = payloadStr;
  } else if (typeof payload === 'string') {
    payloadStr = payload;
    payloadForHash = payloadStr;
  }

  // If it's an ArrayBuffer, try decoding. If it fails, use the ArrayBuffer directly for hashing
  if (payload instanceof ArrayBuffer) {
    payloadForHash = payload; // Always use the ArrayBuffer for hashing
    try {
      payloadStr = new TextDecoder().decode(payload);
    } catch (e) {
      // Keep original ArrayBuffer for hashing
    }
  }

  const payloadHash = await sha256(payloadForHash || '');

  // Build canonical request
  // For S3, the path is the entire urlObj.pathname, including initial '/'.
  // We also keep urlObj.search if needed (like ?acl).
  const canonicalUri = urlObj.pathname || '/';
  
  // Create canonical query string by sorting and encoding parameters
  const canonicalQuery = createCanonicalQueryString(urlObj.searchParams);
  
  // Canonical headers (lowercase, sorted by key). We at least need host, x-amz-date, x-amz-content-sha256.
  const canonicalHeaders =
    `host:${host.toLowerCase()}\n` +
    `x-amz-content-sha256:${payloadHash}\n` +
    `x-amz-date:${date}\n`;
  const signedHeaders = 'host;x-amz-content-sha256;x-amz-date';

  const canonicalRequest = [
    method.toUpperCase(),
    canonicalUri,
    canonicalQuery,
    canonicalHeaders,
    signedHeaders,
    payloadHash
  ].join('\n');

  const hashedCanonicalRequest = await sha256(canonicalRequest);
  const scope = `${shortDate}/${region}/${service}/aws4_request`;

  // String to sign
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    date,
    scope,
    hashedCanonicalRequest
  ].join('\n');

  // Derive signing key
  async function getSignatureKey(key: string, _dateStamp: string, _regionName: string, _serviceName: string) {
    const kDate = await hmacSha256(`AWS4${key}`, _dateStamp);
    const kRegion = await hmacSha256(kDate, _regionName);
    const kService = await hmacSha256(kRegion, _serviceName);
    const kSigning = await hmacSha256(kService, 'aws4_request');
    return kSigning;
  }

  const signingKey = await getSignatureKey(secretKey, shortDate, region, service);
  const signature = toHex(await hmacSha256(signingKey, stringToSign));

  // Build final Authorization header
  const authHeader = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${scope},SignedHeaders=${signedHeaders},Signature=${signature}`;
  return {
    url: requestUrl,
    headers: {
      'x-amz-date': date,
      'x-amz-content-sha256': payloadHash,
      'Authorization': authHeader
    }
  };
}
