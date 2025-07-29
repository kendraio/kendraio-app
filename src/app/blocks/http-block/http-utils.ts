import { sha1 } from './aws-sigv4';

/**
 * Format bytes into human-readable format
 */
export function formatByteSizeForHumans(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Helper to calculate human-readable size and SHA-1 hash
 */
export async function computeMetadata(data: any): Promise<{responseSizeFormatted: string, responseHash: string, responseSizeBytes: number}> {
  let buffer: ArrayBuffer;
  if (data instanceof ArrayBuffer) buffer = data;
  else if (typeof data === 'string') buffer = new TextEncoder().encode(data).buffer;
  else buffer = new TextEncoder().encode(JSON.stringify(data)).buffer;
  const size = buffer.byteLength;
  const responseSizeFormatted = formatByteSizeForHumans(size);
  const responseHash = await sha1(buffer);
  return { responseSizeFormatted, responseHash, responseSizeBytes: size };
}
