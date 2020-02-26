const express = require("express");
const router = express.Router();
const Incident = require("../../models/Incident");
const validateIncidentForm = require("../../validation/incidents");

router.get("/test", (req, res) => {
  res.json({ msg: "this is incidents route" });
});

router.post("/index", (req, res) => {
  debugger;
  const { errors, isValid } = validateIncidentForm(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

   const newIncident = new Incident({
     lat: req.body.lat,
     lng: req.body.lng,
     description: req.body.description,
     category: req.body.category
   });

   newIncident.save()
    .then(incident => res.json(incident))
    .catch(err => console.log(err));
   
});

module.exports = router;
