const express = require('express');
const app = express();

app.use((request, response, next) => {
  console.log('request from: ', request.get('Host'));
  console.log('request to: ', request.url);
  console.log('server 5000 is being requested...');
  next();
});

app.get('/students', (request, response) => {
  const students = [
    { id: '001', name: 'Paco', age: 20 },
    { id: '002', name: 'Haipeng', age: 22 },
    { id: '003', name: 'Feng', age: 23 },
  ];

  response.send(students);
});

app.listen(5000, (error) => {
  if (!error) console.log('starting server on 5000');
});
