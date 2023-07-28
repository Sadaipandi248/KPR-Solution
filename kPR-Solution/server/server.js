
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/hospitalDB", { useNewUrlParser: true });
app.use(bodyParser.json());


const DocSchema = new mongoose.Schema({
  email: String,
  password: String
});

const PatientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  patientCase: String,
  details: String
});

const Doctor = mongoose.model("Doctor", DocSchema);
const Patient = mongoose.model("Patient", PatientSchema);

app.get('/Docregister', (req, res) => {
  res.send("This page only Doctor Allowed!");
});

app.get('/patient',(req,res) => {
  Patient.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})



app.post('/Docregister', (req, res) => {
  const newDoctor = new Doctor({
    email: req.body.email,
    password: req.body.password
  });

  newDoctor.save()
    .then(savedDoctor => {
      console.log("User Doctor:", savedDoctor);
      res.status(201).json(savedDoctor);
    })
    .catch(err => {
      console.log("Error saving Doctor:", err);
      res.status(500).send("Error saving Doctor.");
    });
});

app.post('/Patient', (req, res) => {
  const newPatient = new Patient({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    patientCase: req.body.patientCase,
    details: req.body.details
  });

  newPatient.save()
    .then(savedPatient => {
        console.log("User Patient", savedPatient);
       res.status(201).json(savedPatient)
    })
    .catch(err => {
      console.log("Error saving Patient:", err);
      res.status(500).send("Error saving Patient.");
    });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
