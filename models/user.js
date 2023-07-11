const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const subscription = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const subscrSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscription)
    .required()
    .messages({ "any.required": "Missing field subscription" }),
});

const schemas = {
  registerSchema,
  loginSchema,
  subscrSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
