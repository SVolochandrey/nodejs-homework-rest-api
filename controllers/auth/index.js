const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const updateSub = require("./updateSub");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  getCurrent,
  login,
  logout,
  register,
  updateSub,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
