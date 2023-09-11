const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWTSECRET, { expiresIn: "7d" });
};

module.exports = generateToken;
