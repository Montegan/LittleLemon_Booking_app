import './App.css';
import Homepage from './Pages/Homepage';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Reservetable from './Pages/Reservetable';
import Fullmenu from './Pages/Fullmenu';
import { Route,Routes,Link } from 'react-router-dom';
import Register from './Pages/Register';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Reservetable' element={<Reservetable/>}/>
      <Route path='/Fullmenu' element={<Fullmenu/>}/>
      <Route path='/Register' element={<Register/>}/>
      </Routes>
    </>
  );
}
export default App;
