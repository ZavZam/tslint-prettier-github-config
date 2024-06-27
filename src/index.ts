import express, { Request, Response } from 'express';

const app = express();
const port = 5001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.get('/error', (req: Request, res: Response) => {
  const a = 20
  const b = 20
  res.send("This endpoint has linting issues");
  if (a === b) {
    console.log('This should be a strict equality check')
  }
});

app.get('/animals/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  if (id === '1') {
    return res.send({ animal: 'cat' });
  } 
    return res.send({ animal: 'dog' });
  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});