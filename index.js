import express from 'express';

const app = express();
const tae = 1;

app.get('/', (req, res) => {
  res.send('Hello World from Express Server');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
