import dotenv from 'dotenv'

dotenv.config();

interface Configuration{
    port?: string;
    connectionString?: string;
}

const configuration: Configuration ={
    port: process.env.PORT,
    connectionString: process.env.DBCONNECTIONSTRING
}

export default configuration;

