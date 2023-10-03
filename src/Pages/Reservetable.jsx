import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Bookingform from "../Components/BookingForm/Bookingform";
function Reservetable({ formdata, setformData,availableTime,setavailabeTime,submitted,
setSubmitted}) {
  return (
    <>
      <Header />
      <Bookingform
        setformData={setformData}
        formdata={formdata}
        availableTime={availableTime}
        setavailabeTime={setavailabeTime}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
      <Footer />
    </>
  );
}

export default Reservetable;
