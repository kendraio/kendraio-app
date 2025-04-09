const fs = require('fs').promises;

export const addMetatagsHandler = async (req, resp) => {

    if (req.path.endsWith('.js') && req.path.includes('main.')) {    
        // Firebase hosting should have already handled this but
        // since it has not, we need to handle it here.
        // This is a workaround for the Firebase hosting issue

        // We get the exact filename of the file from the request,
        // since it has a hash.
        const filename = req.path.split('/').pop();
        // we read the file from the public directory
        const filePath = `${process.cwd()}/${filename}`;
        // we read the file and send it as a response
        try {
            const file = await fs.readFile(filePath, 'utf8') as string;
            // Set the content type to application/javascript
            resp.setHeader('Content-Type', 'application/javascript');
            resp.status(200).send(file);
            return;
          } catch (error) {
            console.error(`Error serving ${filename}:`, error);
            resp.status(404).send('File not found');
            return;
        }

    }  
    // Otherwise continue with meta tag processing

    const data = await fs.readFile(`${process.cwd()}/index.html`, 'utf8') as string;
    const metatags = `
<!-- Search Engine -->
<meta property="description" name="description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta property="image" name="image" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<!-- Schema.org for Google -->
<meta itemprop="name" content="Kendraio">
<meta itemprop="description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta itemprop="image" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<!-- Twitter -->
<meta property="twitter:card" content="summary">
<meta property="twitter:title" content="Kendraio">
<meta property="twitter:description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta property="twitter:site" content="@kendraio">
<meta property="twitter:creator" content="@kendraio">
<meta property="twitter:image:src" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta property="og:title" content="Kendraio App">
<meta property="og:description" content="Kendraio App is an open source dashboard application for rights owners, music makers, managers and record labels, enabling users to manage and track their digital media assets, collaborations and associated rights.">
<meta property="og:image" content="https://repository-images.githubusercontent.com/117979379/a32bde00-78bb-11ea-97a2-44df4832b60f">
<meta property="og:url" content="https://app.kendra.io">
<meta property="og:site_name" content="Kendraio App">
<meta property="og:locale" content="en_GB">
<meta property="og:type" content="website">
`;
    resp.status(200).send(`${data.replace('</head>', `${metatags}</head>`)}`);
    return
};
