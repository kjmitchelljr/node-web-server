const express = require('express');

const app = express();

// HTTP Route Handlers

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'KJ',
    likes: ['Basketball', 'Drake']
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Unable to fufill request'
  });
});

app.listen(3000);
