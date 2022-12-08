const express = require('express');
const app = express();

app.use((request, response, next) => {
  console.log('request from: ', request.get('Host'));
  console.log('server 5001 is being requested...');
  next();
});

app.get('/cars', (request, response) => {
  const students = [
    { id: '001', name: 'Mazda', year: 2020 },
    { id: '002', name: 'Benz', year: 2022 },
    { id: '003', name: 'BMW', year: 2023 },
  ];

  response.send(students);
});

app.listen(5001, (error) => {
  if (!error) console.log('starting server on 5001');
});
