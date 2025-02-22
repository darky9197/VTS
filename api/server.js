import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const port = 8080;
const app = express();
app.use(cors({origin:"http://localhost:5173"}))

app.get('/',(req,res)=>{
    res.json({
        status:"running"
    })
})

mongoose.connect('mongodb://0.0.0.0:27017/timetabledb')
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at ${port}`);
        console.log('database connected');
    })
})
.catch(err=>{
    console.log(err);
})