import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Booking from "../models/Booking";

export const getBookings = async (_: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ message: "Invalid Details" });
  try {
    const { name, email, phone, checkIn, checkOut, guests } = req.body;

    const checkInUTC = new Date(req.body.checkIn);
    const checkOutUTC = new Date(req.body.checkOut);

    if (checkOutUTC <= checkInUTC) {
      return res.status(400).json({ message: "Check-out must be after check-in." });
    }

    const booking = new Booking({
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
