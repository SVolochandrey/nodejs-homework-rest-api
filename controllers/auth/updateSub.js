const { User } = require("../../models/user");
const { HttpError } = require("../../utils/HttpError");

const updateSub = async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(400, "Missing field subscription");
  }
  res.json(result);
};

module.exports = updateSub;
