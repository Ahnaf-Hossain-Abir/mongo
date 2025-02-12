const User = require("../models/user");

const createUser = async (req, res) => {
  console.log(req.body, "req.body");
  const { firstName, lastName, email, gender, jobTitle } = req.body;

  // Check if all fields are provided
  if (!firstName || !lastName || !email || !gender || !jobTitle) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Create a new user
    const newUser = new User({
        ...req.body
    });

    // Save user to database
     await newUser.save();

    // Send response back
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error saving user:", err); // Log error on the server
    res.status(500).json({ message: "Service error, please try again later." }); // Generic error message
  }
};

module.exports = createUser;
