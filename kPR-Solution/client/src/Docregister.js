import axios from "axios";
import {useFormik} from "formik"
import "./style.css"
import { useNavigate } from "react-router-dom";
export default function Docregister(){
    let url="http://localhost:4000/Docregister"
const navigate = useNavigate()
    const Formik=useFormik({
        initialValues:{
          email:"",
          password:""
        },
        onSubmit:(values)=>{
          alert("successfully account Created the doctor");
          document.getElementById("form").reset(" ");
          axios.post(url,{
              email:values.email,
              password:values.password
          })
        .then(response =>{
          console.log(response.data);
         navigate('/Viewappoinment')
        }).catch(err =>{
          console.error(err)
        })
        },
        validate:(values)=>{
                let errors={};
                if(!values.email) errors.email="Required"
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                  errors.email = 'Invalid email address'
                }
                if(!values.password) errors.password="Field Required"
                else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)){
                  errors.password="Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
                }
                return errors
        }
      })
    return(
        <>
        <div className="Doctorregister">
            <form onSubmit={Formik.handleSubmit} id="form">
              <h1>Register The Doctor</h1><br />
        <label>Email:</label>
        <input type="text" className="form-control" id="email" name="email" autoComplete="off"  onChange={Formik.handleChange} values={Formik.values.email} />
          {Formik.errors.email?<div style={{color:"red"}}>{Formik.errors.email}</div>:null}

       <br />
        <label>Password:</label> 
        <input type="password" className="form-control" id="password" name="password" autoComplete="off"  onChange={Formik.handleChange} values={Formik.values.password} /> 
          {Formik.errors.password?<div style={{color:"red"}}>{Formik.errors.password}</div>:null}
<br />
         <button type="submit" disabled={!Formik.isValid} className="but">Register</button>
         </form>
         </div>
        </>
    )
}