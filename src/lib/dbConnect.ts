import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number
}

const connection: connectionObject = {}

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "")

        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Succesfully");

    } catch (error) {
        console.log("Db Connection faild>>>", error);
        process.exit(1)
    }
}

export default dbConnect;