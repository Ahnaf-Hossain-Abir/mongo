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

const getUser = async(req, res)=>{
 try{
  const userGet = await User.find();
  console.log(userGet);
  res.status(200).json(userGet)
 } catch(err){
   console.error("you can not get user", err);
   res.status(500).json({messag: "Service error, please try again later."})
 }
}

const getUserById = async (req,res)=>{
  try{
    const userId = await User.findById(req.params.id);
    console.log(userId);
    res.status(201).json(userId);
  } catch(err){
    console.error("good bye", err);
    res.status(500).json({messag: "Service error, please try again later."})
  }
}

const updateUser = async(req, res)=>{
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(updatedUser);
    res.status(201).json(updatedUser);
  } catch(err){
    console.error("you can not update user", err);
    res.status(500).json({message: "you can not update user"})
  }
}

const deleteUser = async(req, res)=>{
  try{
    const userDelete = await User.findByIdAndDelete(req.params.id);
    console.log(userDelete);
    res.status(200).json(userDelete);
  } catch(err){
    console.error("you can not delete user", err);
    res.status(500).json({message: "you can not delete user"})
  }
}


module.exports = {createUser, getUser, getUserById, updateUser, deleteUser};
