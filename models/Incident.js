const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    type: Number,
    required: true
  },

  lng: {
    type: Number,
    required: true
  }
});

module.exports = Incident = mongoose.model('Incident', IncidentSchema)