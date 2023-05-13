import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
