import axios from "axios";
import { useState, useEffect } from "react";

export default function Viewappoinment() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/patient')
      .then(result => setPatients(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>
        <h1 style={{textAlign:"center",color:"darkblue"}}><i>View The Appoinment</i></h1>
        <h1 style={{textAlign:"center",color:"darkblue"}}><i>List of Patients</i></h1>
        {patients.map((item) => (
          <div key={item._id} style={cartStyle}>
            <h3>{item.name}</h3>
            <p><strong style={{color:"brown"}}>Email:</strong> {item.email}</p>
            <p><strong style={{color:"brown"}}>Phone:</strong> {item.phone}</p>
            <p><strong style={{color:"brown"}}>Type Of Case:</strong> {item.patientCase}</p>
            <p><strong style={{color:"brown"}}>Details:</strong> {item.details}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const cartStyle = {
  border: "3px solid #ccc",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "40px",
  backgroundColor: "#f9f9f9",
  width:"580px",
  textAlign: "center",
  marginLeft:"390px",
  
};
