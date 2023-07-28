

import React, { useState } from "react";
import axios from "axios";

export default function Patient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patientCase: "",
    details: "",
  });

  //const url = "http://localhost:4000/Patient";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Booking the appoinment the Doctor");

    axios
      .post("http://localhost:4000/Patient", formData)
      .then((response) => {
        console.log("Response from server:", response.data);
        document.getElementById("form").reset();
      })
      .catch((err) => {
        console.error("Error sending data:", err);
      });
  }

  return (
    <>
    <div className="card">
      <form id="form" onSubmit={handleSubmit}>
        <h1>patient</h1>
        <label>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="abc" required /><br /><br />
        <label>Email:   </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="abc@gmail.com" required /><br /><br />
        <label>Mobile Num:</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="123" required /><br /><br />
        <label>Type of Case:    </label>
        <select name="patientCase" value={formData.patientCase} onChange={handleChange} required>
          <option value="">Type of case</option>
          <option value="corona">Corona</option>
          <option value="malaria">Malaria</option>
          <option value="kidney stone">Kidney Stone</option>
          <option value="Fever">Fever</option>
        </select><br /><br />
        <label>Details:</label>
        <input type="text" name="details" value={formData.details} onChange={handleChange} required placeholder="Please enter your address" /><br /><br />
        <button type="submit" className="button-patient">Submit</button>
      </form>
      </div>
    </>
  );
}
