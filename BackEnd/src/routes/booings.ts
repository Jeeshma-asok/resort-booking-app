import { Router } from "express";
import { body} from "express-validator";
import { getBookings, createBooking } from "../controllers/bookingControllers";

const router = Router();

router.get("/bookings", getBookings);
router.post("/bookings", 
    [
    body("name").isString().isLength({ min: 1, max: 100 }),
    body("email").isEmail(),
    body("phone").matches(/^\d{7,15}$/),
    body("checkIn").isISO8601(),
    body("checkOut").isISO8601(),
    body("guests").isInt({ min: 1 }),
  ],
  createBooking);


export default router;
