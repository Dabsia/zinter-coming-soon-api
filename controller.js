import { User } from "./model.js";

export const register = async (req, res) => {
  const { fullname, number, comingWithGuest } = req.body;
  try {
    if (!fullname || !number || comingWithGuest === undefined) {
      return res.status(400).json({
        status: "false",
        message: "All fields are required",
      });
    }

    const userAlreadyExists = await User.findOne({ number });
    if (userAlreadyExists) {
      return res.status(400).json({
        status: "false",
        message: "This Number has already been registered",
      });
    }

    const user = new User({
      fullname,
      number,
      comingWithGuest,
    });

    await user.save();

    return res.status(201).json({
      status: true,
      message: "User Registered Successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "false",
      message: "Internal server error",
    });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json({
      status: true,
      message: "Users fetched successfully",
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "false",
      message: "Internal server error",
    });
  }
};
