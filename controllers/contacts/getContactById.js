const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils/HttpError");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactById;
