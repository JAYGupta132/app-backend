require('dotenv').config()

const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send('hello jay prakash gupta')
})
app.get('/a', (req, res) => {
  res.send('hi jay prakash gupta')
})
app.get('/b', (req, res) => {
  res.send('<h1>hey! jay prakash gupta</h1>')
})
app.get('/c', (req, res) => {
  res.send('hey jay! how are you')
})

app.listen(process.env.PORT, () => {
  console.log('database connected...')
})