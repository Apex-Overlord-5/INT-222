const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 1000;

const files = ['file1.html', 'file2.html', 'file3.html', 'formvalidation.html'];

app.get('/', (req, res) => {
  const htmlPage = `
    <html>
      <head>
        <title>File Buttons</title>
      </head>
      <body>
        <button onclick="redirectTo('/file1.html')">File 1</button>
        <button onclick="redirectTo('/file2.html')">File 2</button>
        <button onclick="redirectTo('/file3.html')">File 3</button>
        <button onclick="redirectTo('/formvalidation.html')">Form Validation</button>
        <script>
          function redirectTo(file) {
            window.location.href = file;
          }
        </script>
      </body>
    </html>
  `;
  res.send(htmlPage);
});

app.get('/:file', async (req, res) => {
  const requestedFile = req.params.file;

  if (files.includes(requestedFile)) {
    const filePath = path.join(__dirname, requestedFile);
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      res.send(content);
    } catch (error) {
      res.status(500).send('Error 69');
    }
  } else {
    res.status(404).send('404 ERROR: Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
