import mongoose from "mongoose"

export const dbConnection = async() => {
    try{
        mongoose.connection.on('error', () => {
            console.log('MongoDB | could not be connect to mongodb')
            mongoose.disconnect();
        })
        mongoose.connection.on('connecting',() => {
            console.log('MongDB | Try Connecting')
        })
        mongoose.connection.on("connected" , () => {
            console.log('MongoDB | connected mongoDB')
        })
        mongoose.connection.on('open', () =>{
            console.log('MongoDB | connected to dabase')
        })
        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB | reconnected to MongoDB')
        })
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB | disconnected')
        })

        await mongoose.connect(process.env.MONGODB_CNN, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50
        });
        
    }catch(error){
        console.log('Database connection failed', error)
    }
}