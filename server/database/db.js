import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const connection=()=>{


    const MONGODB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.c6kxxgg.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URL,{useNewUrlParser:true})

    mongoose.connection.on('connected',()=>{
        console.log("database connected successfully ")
    })

    mongoose.connection.on('disconnected',()=>{
        console.log("database not connected")
    })

    mongoose.connection.on('error',()=>{
        console.log("error while connecting to database",error.message)
    })
}

export default connection;