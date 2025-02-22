import mongoose, { mongo } from "mongoose";

const subSchema = mongoose.Schema({
    name:String,
    staffid:Number,
    count:Number,
    isLab:Boolean
})

const tableSchema = mongoose.Schema({
    department:{
        type:String
    },
    class:{
        type:Number
    },
    table:
})