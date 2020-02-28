const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateIncidentForm(data) {
  let errors = {};
  let categories = ["Theft", "Homicide", "Street-Fight", "Robbery", "Assault", "Misc." ];
  data.description = validText(data.description) ? data.description : "";

  if (!Validator.isFloat(data.lat)) {
    errors.lat = "Latitude is invalid";
  }
  
  if (Validator.isEmpty(data.lat)) {
    errors.lat = "Latitude field is required";
  }

  if (!Validator.isFloat(data.lng)) {
    errors.lng = "Longitude is invalid";
  }

  if (Validator.isEmpty(data.lng)) {
    errors.lng = "Longitude field is required";
  }

  if (!Validator.isLength(data.description, { min: 10, max: 250 })) {
    errors.description = "Description must be between 10 and 250 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (!Validator.isIn(data.category, categories)) {
    errors.category = "Category field is invalid";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
