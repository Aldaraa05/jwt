const jwt = require("jsonwebtoken");

const isVerified = (req, res, next) => {
  const token = req.headers.authorization;

  const result = jwt.verify(
    token,
    process.env.JWT_SECRET || "defaultSecretKey"
  );

  console.log(result);

  if (result) {
    next();
  } else {
    console.log(result);
  }
};

exports.isVerified = isVerified;
