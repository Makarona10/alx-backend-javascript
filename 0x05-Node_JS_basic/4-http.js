const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
  const reponse = 'Hello Holberton School!';
  res.statusCode = 200;
  res.write(Buffer.from(reponse));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening on: ${HOST}:${PORT}\n`);
});

module.exports = app;
