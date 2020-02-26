const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Double = require("@mongoosejs/double");

const IncidentSchema = new Schema({
  witness: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lat: {
    type: Double,
    required: true
  },

  lng: {
    type: Double,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Incident = mongoose.model('Incident', IncidentSchema)