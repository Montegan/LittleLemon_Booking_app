import React, { useState } from "react";
import "./bookingform.css";
function Bookingform({
  formdata,
  setformData,
  availableTime,
  setavailabeTime,
}) {
  const [BookingDetails, setBookingDetails] = useState({
    Date: "",
    Time: "",
    GuestNumber: "",
    Occasion: "",
    freeTime:[...availableTime.Times],
  });

  const handleSubmition = (e) => {
    e.preventDefault();
    console.log(availableTime.Times)
    setBookingDetails({ ...BookingDetails,freeTime: BookingDetails.freeTime.filter((items)=> items!== e.target.value) });
    console.log(BookingDetails.freeTime)
    setformData([...formdata, BookingDetails]);
    setBookingDetails({
      ...BookingDetails,
      Date: "",
      Time: "",
      GuestNumber: "",
      Occasion: "",
      freeTime: [...availableTime.Times]
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmition} className="formContainer">
        <label htmlFor="formDate">Date</label>
        <input
          type="date"
          id="formDate"
          value={BookingDetails.Date}
          onChange={(e) => {
            setBookingDetails({ ...BookingDetails, Date: e.target.value });
            setavailabeTime({ payload: e.target.value });
            //console.log(BookingDetails.Date);
          }}
          className="Datefield"
        />


        <label htmlFor="formTime">Time</label>
        <select
          id="formTime"
          placeholder="Select time"
          value={BookingDetails.Time}
          onChange={(e) => {
            setBookingDetails({ ...BookingDetails, Time: e.target.value, freeTime: BookingDetails.freeTime.filter((items)=> items!== e.target.value) });
          }}
          className="Timefield"
        >
          {availableTime.Times.length === 0 ? (
            <option value="" disabled selected>
              No time slots available
            </option>
          ) : (
            <>
              <option value="Please select an option" selected hidden>
                Please select an option
              </option>
              {availableTime.Times.map((time) => (
                <option key={time} value={time} > {time} </option>
              ))}
            </>
          )}
        </select>
        <label htmlFor="formGuest">Number of guests</label>
        <input
          type="number"
          id="formGuest"
          className="Guestfield"
          placeholder="1"
          min="1"
          max="12"
          value={BookingDetails.GuestNumber}
          onChange={(e) => {
            setBookingDetails({
              ...BookingDetails,
              GuestNumber: e.target.value,
            });
          }}
        />
        <label htmlFor="formOccasion">Occasion</label>
        <select
          id="formOccasion"
          value={BookingDetails.Occasion}
          onChange={(e) => {
            setBookingDetails({
              ...BookingDetails,
              Occasion: e.target.value,
            });
          }}
          className="Occasionfield"
        >
          <option value="Date Night">Date Night</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Birthday">Birthday</option>
          <option value="Graduation">Graduation</option>
        </select>
        <button type="submit" className="submitReservation">
          Reserve table
        </button>
      </form>
    </div>
  );
}

export default Bookingform;
