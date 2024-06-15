import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection Err::", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
