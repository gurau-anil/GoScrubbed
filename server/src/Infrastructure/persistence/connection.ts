import mongoose from 'mongoose'
import configuration from '../../config';

const connectDB = () => {
  mongoose
    .connect(configuration.connectionString || '')
    .then(() => console.log("DB Connected."))
    .catch((err) => console.log("DB Connection Failed.", err));
};



export default connectDB;