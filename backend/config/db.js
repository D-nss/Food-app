import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://daniel:25012004@cluster0.iwakg.mongodb.net/food-del").then(()=>console.log("DB Connected"))
}

