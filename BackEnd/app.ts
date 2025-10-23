import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./src/routes/booings";
import { connectDB } from "./db";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost' }));
app.use(express.json());

app.use("/api", bookingRoutes);


app.get("/", (_, res) => res.send("Resort Booking API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

