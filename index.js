import express from 'express';

const app = express();
const tae = 1;

app.get('/', (req, res) => {
  res.send('Hello World from Express Server');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

app.get('/nonexistent', (req, res) => {
  res.status(404).send('Route not found');
});

// Only start the server if this file is run directly (not imported for testing)
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

export default app;
