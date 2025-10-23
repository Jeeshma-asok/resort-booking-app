import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  phone?: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true, min: 1 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBooking>("Booking", BookingSchema);
