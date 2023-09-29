import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Bookingform from "../Components/BookingForm/Bookingform";
function Reservetable({
  setBookingDetails,
  BookingDetails,
  formdata,
  setformData,
}) {
  return (
    <>
      <Header />
      <Bookingform
        setformData={setformData}
        formdata={formdata}
        setBookingDetails={setBookingDetails}
        BookingDetails={BookingDetails}
      />
      <Footer />
    </>
  );
}

export default Reservetable;
