import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port: number = 3000;

const add = (a: number, b: number) => a + b;
app.get('/', (req: Request, res: Response, next: NextFunction) => {
	console.log(add(5, 5));
	res.send('Hello World');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
