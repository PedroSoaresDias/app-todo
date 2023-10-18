import mongoose from "mongoose";

async function conectarMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conectado ao MongoDB")
    } catch (error) {
        console.log(error)
    }
};

export default conectarMongoDB;