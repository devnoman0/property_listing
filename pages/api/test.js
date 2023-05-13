import connectDB from "@/lib/dbConnect";
import User from "@/models/user";

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const pets = await User.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: pets });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { name, email, password, isAdmin } = req.body;
        const savePet = new User({
          name,
          email,
          password,
          isAdmin,
        });

        const isNewUser = await User.findOne({ email });
        if (isNewUser) {
          res
            .status(400)
            .json({ success: false, message: "User already exists" });
          return;
        }

        const pet = await savePet.save();
        res.status(201).json({ success: true, data: pet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
