import React from "react";

function Bookingform({
  setBookingDetails,
  BookingDetails,
  formdata,
  setformData,
}) {
  const handleSubmition = (e) => {
    e.preventDefault();
    setformData([...formdata, BookingDetails]);
    console.log(formdata);
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
            console.log(BookingDetails.Date);
          }}
          className="Datefield"
        />
        <label htmlFor="formTime">Time</label>
        <input
          type="time"
          id="formTime"
          value={BookingDetails.Time}
          onChange={(e) => {
            setBookingDetails({ ...BookingDetails, Time: e.target.value });
          }}
          className="Timefield"
        />
        <label htmlFor="formGuest">Number of guests</label>
        <input
          type="number"
          id="formGuest"
          className="Guestfield"
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
