import express, { Request, Response } from 'express';
import cors from 'cors'
import configuration from './config';
import customerRoutes from './Presentation/routes/customerRoute';
import connectDB from './Infrastructure/persistence/connection';

const app = express();
const port = configuration.port || 5005;

connectDB();

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
  }
app.use(cors(corsOptions));
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express + TypeScript!');
  });


  //User Api Request hits here and hands it to the CuustomerRoutes at './Presentation/routes/customerRoute'
app.use("/customer", customerRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})