import { User } from "./model.js";

export const register = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        status: "false",
        message: "All fields are required",
      });
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({
        status: "false",
        message: "User already exists",
      });
    }

    const user = new User({
      email,
    });

    await user.save();

    return res.status(201).json({
      status: true,
      message: "User Registered Successfully.",
    });
  } catch (error) {
    console.log(error);
  }
};
