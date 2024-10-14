import mongoose from "mongoose"

const connectDB = async => {
    mongoose
        .connect('mongodb://localhost:27017/workshop')
        .then(() => console.log("Conectado ao MongoDB"))
        .catch((error) => console.log(error))
}

export default connectDB