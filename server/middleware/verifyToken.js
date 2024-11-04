const jwt = require("jsonwebtoken");
const Token = require("../model/Token");

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  // if no token available, send 401
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "no token provided",
    });
  }
  const storedToken = await Token.findOne({ token });
  if (!storedToken) {
    return res.status(401).json({
      token,
      success: false,
      error: "please authenticate using a valid token",
    });
  }

  try {
    // verify the token and extract the user details
    const payload = jwt.verify(token, JWT_SECRET);

    // add the payload data to the request object
    req.user = payload.user;

    next(); // proceeding to the next middleware
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: "please authenticate using a valid token",
    });
  }
};

module.exports = verifyToken;