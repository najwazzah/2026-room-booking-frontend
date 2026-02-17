import React from "react";
import BookingList from "./components/BookingList";
import CreateBooking from "./components/CreateBooking";

function App() {
  const reload = () => window.location.reload();

  return (
    <div>
      <h1>Room Booking System</h1>
      <CreateBooking onCreated={reload} />
      <BookingList />
    </div>
  );
}

export default App;