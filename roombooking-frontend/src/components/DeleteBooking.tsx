import React from "react";
import { deleteBooking } from "../services/bookingService";

interface Props {
    id: number;
    onDeleted: () => void;
}

const DeleteBooking: React.FC<Props> = ({ id, onDeleted }) => {
    const handleDelete = () => {
        deleteBooking(id).then(() => {
        alert("Booking berhasil dihapus!");
        onDeleted();
        });
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteBooking;