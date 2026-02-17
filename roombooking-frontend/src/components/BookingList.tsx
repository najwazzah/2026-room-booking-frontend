import React, { useEffect, useState } from "react";
import { getBookings, updateBooking, deleteBooking, Booking } from "../services/bookingService";

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    const loadBookings = () => {
        getBookings()
        .then((res) => {
            setBookings(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error fetching bookings:", err);
            setLoading(false);
        })
    };

    useEffect(() => {
        loadBookings();
    }, []);

    if (loading) {
        return <p>Loading data...</p>;
    }

    const handleUpdate = (booking: Booking, newStatus: string) => {
        const updated = { ...booking, status: newStatus };
        updateBooking(booking.id, updated).then(() => {
        alert("Booking berhasil diupdate!");
        loadBookings();
        });
    };

    const handleDelete = (id: number) => {
        deleteBooking(id).then(() => {
        alert("Booking berhasil dihapus!");
        loadBookings();
        });
    };

    return (
        <div>
        <h2>Daftar Peminjaman Ruangan</h2>
        {bookings.length === 0 ? (
            <p>Tidak ada booking.</p>
        ) : (
            <ul>
            {bookings.map((b) => (
                <li key={b.id}>
                {b.roomName} - {b.bookedBy} - {b.date} - {b.status}
                {" "}
                <select
                    value={b.status}
                    onChange={(e) => handleUpdate(b, e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <button onClick={() => handleDelete(b.id)}>Delete</button>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default BookingList;