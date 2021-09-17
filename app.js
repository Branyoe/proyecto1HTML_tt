const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static("./public"));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/p1', (req, res) => {
  res.sendFile(__dirname + '/public/p1.html');
});

app.get('/p2', (req, res) => {
  res.sendFile(__dirname + '/public/p2.html');
});

app.get('/p3', (req, res) => {
  res.sendFile(__dirname + '/public/p3.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/formulario.html');
});

app.listen(port, () => {
  console.log('Server on port 3000');
});