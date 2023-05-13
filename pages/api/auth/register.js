import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;
  connectDB();

  if (method === "POST") {
    const { userName, email, firstName, lastName, mobile, password, isAdmin } =
      req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const saveUser = await new User({
        userName,
        firstName,
        lastName,
        mobile,
        email,
        password: hashedPassword,
        isAdmin,
      });

      const isUserNameValid = await User.findOne({ userName });
      if (isUserNameValid) {
        res.status(400).json({ message: "Username already exists" });
        return;
      }

      const checkUser = await User.findOne({ email });
      if (checkUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const user = await saveUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", data: user });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
