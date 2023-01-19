const User = require("../model/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.Login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { username },
        process.env.JWT_SECTRT || "defaultSecretKey"
      );
      res.send(token);
    }
  } catch (err) {
    res.send(err);
  }
};

exports.Users = async (req, res) => {
  res.send("you have signed in");
};
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  console.log("hi", password);
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  try {
    newUser = await new User({ username, password: hashedPassword }).save();
    res.send(newUser);
    res.send("hashed", hashedPassword);
  } catch (err) {
    res.send(err);
  }
};
