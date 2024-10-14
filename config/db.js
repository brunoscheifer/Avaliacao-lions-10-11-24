import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async => {
    mongoose
        .connect(`mongodb+srv://${process.env.USERNAME}:${process.env.USER_PASSWORD}@${process.env.CLUSTER_ADDRESS}/workshop-managment`)
        .then(() => console.log("Conectado ao MongoDB"))
        .catch((error) => console.log(error))
}

export default connectDB