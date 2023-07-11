const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = register;
