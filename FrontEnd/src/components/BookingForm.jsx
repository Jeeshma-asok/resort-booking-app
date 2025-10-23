import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TextField from "./TextField";
import { clearError, clearSuccess, submitBooking } from "../bookingSlice";
import Button from "./Botton";

const BookingForm = ({ isOpen, onClose }) => {

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.booking);

  const [formData, setFormData] = useState({});
   useEffect(() => {
      if (isOpen) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
        });
        dispatch(clearSuccess());
        dispatch(clearError());
      }
   }, [isOpen])


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(submitBooking(formData));
  };

   useEffect(() => {
    if (success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
      });
    }
  }, [success]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-lg animate-fade-in" >
        <button
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>

        {success && <p className="text-green-500 mb-2">{success}</p>}
        {error && <p className="text-red-500 mb-2">{error}</p>}


        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextField
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            type="date"
            name="checkIn"
            required
            value={formData.checkIn}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
          <TextField
            type="date"
            name="checkOut"
            required
            value={formData.checkOut}
            min={formData.checkIn}
            onChange={handleChange}
          />
          <TextField
            type="number"
            name="guests"
            min="1"
            required
            value={formData.guests}
            onChange={handleChange}
          />
          <Button
            type="submit"
            text={loading ? "Booking..." : "Book Now"}
            variant="Orange"
            disabled={loading}
            className="font-semibold py-2 rounded ransition"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
