import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log('DEBUG: MONGO_URI =', process.env.MONGO_URI);

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Unable to connect to MongoDB: ${error}`.cyan.underline);
        process.exit(1);
    }
}

export default connectDB;