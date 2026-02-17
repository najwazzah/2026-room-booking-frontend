import React, { useState } from "react";
import { updateBooking, Booking } from "../services/bookingService";

interface Props {
    booking: Booking;
    onUpdated: () => void;
    }

    const UpdateBooking: React.FC<Props> = ({ booking, onUpdated }) => {
    const [status, setStatus] = useState(booking.status);

    const handleUpdate = () => {
        const updated = { ...booking, status };
        updateBooking(booking.id, updated).then(() => {
        alert("Booking berhasil diupdate!");
        onUpdated();
        });
    };

    return (
        <div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
        </select>
        <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateBooking;