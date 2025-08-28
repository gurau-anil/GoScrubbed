import express, { Request, Response } from 'express';
import cors from 'cors'
import configuration from './config';
import customerRoutes from './routes/customerRoute';

const app = express();
const port = configuration.port || 5005;

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
  }
app.use(cors(corsOptions));
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express + TypeScript!');
  });

app.use("/customer", customerRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})