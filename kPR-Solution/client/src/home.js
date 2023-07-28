

import { Link } from "react-router-dom";
import doctor from "../src/image/doctor.jpg";
// import narse from "../src/image/narse.jpg"; 
import patient from "../src/image/patient.jpg";
import "./style.css";

export default function Home() {
  return (
    <>
      <h1 className="heading"><i>Hospital Management Application</i></h1>
      
      {/* Doctor section */}
      <div className="doctor">
        <h1 className="heading">Doctor</h1>
        <img src={doctor}  />
        
       <li><Link to="/Docregister" className="button"><b>Register</b></Link></li> 
      </div>
      
      {/* Nurse section */}
      {/* <div className="narse">
        <h1 className="heading">Nurse</h1>
        <img src={narse} style={{ width: '18em', marginTop: '5em', marginLeft: '30px', padding: '70px' }} />
      </div> */}
      
      {/* Patient section */}
      <div className="patient">
        <h1 className="heading">Patient</h1>
        <img src={patient}  />
      <li><Link to="/Patient" className="button"><b>book the Appoinment</b></Link></li>  
{/* <button to="/Patient">book the appoinment</button> */}
      </div>
    </>
  );
}
