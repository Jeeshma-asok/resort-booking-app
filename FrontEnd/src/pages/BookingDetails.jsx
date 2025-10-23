import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../bookingSlice";

export default function BookingDetailsPage() {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector(state => state.booking);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <div className="pt-16 min-h-screen bg-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Booking Details</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Check-In</th>
                  <th className="px-4 py-2 border">Check-Out</th>
                  <th className="px-4 py-2 border">Guests</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b._id} className="text-center">
                    <td className="px-4 py-2 border">{b.name}</td>
                    <td className="px-4 py-2 border">{b.email}</td>
                    <td className="px-4 py-2 border">{b.phone}</td>
                    <td className="px-4 py-2 border">{new Date(b.checkIn).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border">{new Date(b.checkOut).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border">{b.guests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
