import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rezeptRoutes from './routes/rezeptRoutes.js';



const app = express();
dotenv.config();
const dbUrl = process.env.MONGODB_URL;

mongoose.connect(dbUrl)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


app.use(cors());
app.use(express.json());

app.use("/rezept", rezeptRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {    
    console.log('Server started on port: ' + PORT);
});