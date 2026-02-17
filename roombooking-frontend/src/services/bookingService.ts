import axios from "axios";

export interface Booking {
  id: number;
  roomName: string;
  bookedBy: string;
  date: string;
  status: string;
}

// DTO khusus untuk create (tanpa id)
export interface CreateBookingDto {
    roomName: string;
    bookedBy: string;
    date: string;
    status: string;
}

const API_URL = "http://localhost:5110/api/RoomBooking";

export const getBookings = () => axios.get<Booking[]>(API_URL);
export const createBooking = (data: CreateBookingDto) => axios.post(API_URL, data);
export const updateBooking = (id: number, data: Booking) => axios.put(`${API_URL}/${id}`, data);
export const deleteBooking = (id: number) => axios.delete(`${API_URL}/${id}`);