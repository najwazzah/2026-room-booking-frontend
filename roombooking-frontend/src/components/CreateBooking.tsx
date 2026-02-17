import React, { useState } from "react";
import { createBooking, Booking } from "../services/bookingService";

interface Props {
    onCreated: () => void;
    }

    const CreateBooking: React.FC<Props> = ({ onCreated }) => {
    const [roomName, setRoomName] = useState("");
    const [bookedBy, setBookedBy] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Pending");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBooking: Booking = { id: 0, roomName, bookedBy, date, status };
        createBooking(newBooking).then(() => {
        alert("Booking berhasil ditambahkan!");
        setRoomName("");
        setBookedBy("");
        setDate("");
        setStatus("Pending");
        onCreated();
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Buat Booking Baru</h2>
        <input
            type="text"
            placeholder="Nama Ruangan"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Nama Peminjam"
            value={bookedBy}
            onChange={(e) => setBookedBy(e.target.value)}
            required
        />
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">Tambah Booking</button>
        </form>
    );
};

export default CreateBooking;