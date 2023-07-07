const JWT = require("jsonwebtoken");
require("dotenv").config();
const verifyAccessTokenCookie = (req, res, next) => {
    try {
      const { t } = req.cookies;
      console.log(t);
      if (t) {
        JWT.verify(t, process.env.JWT_SECRET, (err, payload) => {
          if (err) {
            if (err.name === "TokenExpiredError") {
              return res.status(401).json({
                msg: "Token expired",
              });
            } else {
              return res.status(401).json({
                msg: "Invalid token",
              });
            }
          }
          console.log(payload);
          if(payload.roleId === 'admin'){
            return next();
          }else{
            return res.status(403).json({
                msg: "Only admin has the right to edit",
              });
          }
          
        });
      } else {
        return res.status(401).json({
          msg: "No token found",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  };
  module.exports = {

  verifyAccessTokenCookie,
  };