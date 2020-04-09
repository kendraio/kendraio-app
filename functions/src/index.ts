import * as functions from 'firebase-functions';
const fs = require('fs').promises;

export const dynamicIndex = functions.https.onRequest(async (req, resp) => {
  const data = await fs.readFile('index.html', 'utf8') as string;
  // TODO: Generate metatags and insert into header
  resp.status(200).send(`${data.replace('</body>', '<!--end of body--></body>')}`);
});
