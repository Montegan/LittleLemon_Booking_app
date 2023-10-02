import "./App.css";
import Homepage from "./Pages/Homepage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Reservetable from "./Pages/Reservetable";
import Fullmenu from "./Pages/Fullmenu";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import { useState, useReducer } from "react";
function App() {
  const [formdata, setformData] = useState([]);

  const Change_time = (TimeList, action) => {
    const selectedDate = formdata.filter(
        (items) => action.payload === items.Date
          );
          console.log(selectedDate)
          if(selectedDate.length===0){
            return {TimeList,Times:[
              "17:00",
              "18:00",
              "19:00",
              "20:00",
              "21:00",
              "22:00",
            ]}
            }
          else if(selectedDate.length!==0){

             let Temp= selectedDate[0].freeTime;
             //["17:00",
            // "18:00",
            // "19:00",
            // "20:00",
            // "21:00",
            // "22:00"]
            if (selectedDate[0].Date === action.payload){
            console.log(selectedDate[0].Date)
            console.log(action.payload)
            const availableTime= selectedDate.map((items)=>{
              console.log(items.Time)
              console.log(Temp)
             return Temp.filter((time) => time !== items.Time)
            })
            console.log(availableTime[0])
            return {TimeList,Times:availableTime[0]} }
          }
          }
  const [TimeList, dispatch] = useReducer(Change_time, {Times:[
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]}
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/Reservetable"
          element={
            <Reservetable
              availableTime={TimeList}
              setavailabeTime={dispatch}
              setformData={setformData}
              formdata={formdata}
            />
          }
        />
        <Route path="/Fullmenu" element={<Fullmenu />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}
export default App;

// if (formdata.length === 0) {
    //   console.log(action.payload);
    //   return TimeList;
    // } else if (formdata.length !== 0) {
    //   if (action.payload in formdata){
    //   const selectedDate = formdata.filter(
    //     (items) => action.payload === items.Date
    //     );
    //   const Selectedtime = formdata.map((items) => {
    //     let tt;
    //     if (action.payload === items.Date) {tt=items.Time}
    //     return tt;
    //   });
    //   console.log(selectedDate)
    //   // let mm;
    //   // if (action.payload === selectedDate[0].Date){
    //   //   mm= TimeList.filter((time) => time !== Selectedtime)}
    //   // else {
    //   //     mm=TimeList
    //   //   }
    //   // return ["1","2","3"];
    // }else{
    //   return ["1","2","3"];
    // }
  //(TimeList.filter((time)=> time !== BookingDetails.Time ));
  // //let timed;
  // if(action.payload === items.Date){
  //   return timed = TimeList.filter((time)=> time !== items.Time);
  // }
  // else if (action.payload !== items.Date){
  //   return timed=TimeList}
  // return TimeList=timed;
