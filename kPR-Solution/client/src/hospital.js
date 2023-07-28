import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import Docregister from './Docregister'
import Patient from './patient'
import Viewappoinment from './Viewappoinment'
export default function Hospital(){
    return(
        <>
 <HashRouter>
    <Routes>
     
     <Route path='/Docregister' element={<Docregister />} />
     <Route path='/Patient' element={<Patient />} />
     <Route path='/Viewappoinment' element={<Viewappoinment />} />
     <Route path='/' element={<Home />} />
    </Routes>
 </HashRouter>
        </>
    )
}