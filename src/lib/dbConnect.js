import mongoose from "mongoose";

const dbConnect = async () => {

  
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://devanshjindal31:123456dishu@cluster0.sa2rv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default dbConnect;
