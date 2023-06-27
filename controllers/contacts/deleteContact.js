const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils/HttpError");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete succses!" });
};

module.exports = deleteContact;
