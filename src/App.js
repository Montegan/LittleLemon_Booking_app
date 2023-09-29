import './App.css';
import Homepage from './Pages/Homepage';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Reservetable from './Pages/Reservetable';
import Fullmenu from './Pages/Fullmenu';
import { Route,Routes } from 'react-router-dom';
import Register from './Pages/Register';
import { useState } from 'react';
function App() {

  const [BookingDetails, setBookingDetails]= useState({Date:'',
  Time:'',
  GuestNumber:'',
  Occasion:''});

  const [formdata,setformData]=useState([]);
  return (
    <>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Reservetable' element={<Reservetable setformData={setformData} formdata={formdata} setformDatasetBookingDetails={setBookingDetails}  BookingDetails={BookingDetails} setBookingDetails={setBookingDetails}/>}/>
      <Route path='/Fullmenu' element={<Fullmenu/>}/>
      <Route path='/Register' element={<Register/>}/>
      </Routes>
    </>
  );
}
export default App;
