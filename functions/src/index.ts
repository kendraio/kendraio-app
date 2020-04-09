import * as functions from 'firebase-functions';
const fs = require('fs').promises;

export const dynamicIndex = functions.https.onRequest(async (req, resp) => {
  const data = await fs.readFile('index.html', 'utf8') as string;
  const metatags = `
<!-- Search Engine -->
<meta name="description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta name="image" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<!-- Schema.org for Google -->
<meta itemprop="name" content="Kendraio">
<meta itemprop="description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta itemprop="image" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<!-- Twitter -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Kendraio">
<meta name="twitter:description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta name="twitter:site" content="@kendraio">
<meta name="twitter:creator" content="@kendraio">
<meta name="twitter:image:src" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta name="og:title" content="Kendraio App">
<meta name="og:description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta name="og:image" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<meta name="og:url" content="https://app.kendra.io">
<meta name="og:site_name" content="Kendraio App">
<meta name="og:locale" content="en_GB">
<meta name="og:type" content="website">
`;
  resp.status(200).send(`${data.replace('</head>', `${metatags}</head>`)}`);
});
