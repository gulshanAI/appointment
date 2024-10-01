import { body, param } from "express-validator";
import sanitizeUseFullInput from "./sanitizeInput.js";
import Appointment from "../../models/appointment.model.js";

export const validateAppointment = [
  body("name", "Name is required").trim().escape().notEmpty(),
  body("email").isEmail().withMessage("Invalid email"),
  body("phone").isMobilePhone().withMessage("Invalid phone number"),
  body("start").isISO8601().withMessage("Invalid date"),
  body("end").isISO8601().withMessage("Invalid date"),
  (req, res, next) => {
    sanitizeUseFullInput(req, [], Appointment);
    next();
  },
];

export const validateAptUpdate = [
  param("id").isMongoId().withMessage("Invalid client ID"),
  validateAppointment,
];

export const validateAppointmentId = [
  param("id").isMongoId().withMessage("Invalid client ID"),
  (req, res, next) => {
    next();
  },
];
