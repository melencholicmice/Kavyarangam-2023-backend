import mongoose from "mongoose";

export const connectMongo = (db:string ,options?: mongoose.ConnectOptions | undefined) => {
    mongoose
        .connect(
            db , 
            options,
        )
        .then(()=>{
            console.log(`Successfully connected to ${db}`);
        })
        .catch(error => {
            console.error('Could not connect to mongodb , ERROR :-', error );
        });
}

export const connectReddis = () => {
    // TODO write function to connect to reddis
    console.log("make connection");

}