import express from 'express';
import cors from 'cors'
import configuration from './config';

const app = express();
const port = configuration.port || 5000;

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
  }
app.use(cors(corsOptions));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, Express + TypeScript!');
  });

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})