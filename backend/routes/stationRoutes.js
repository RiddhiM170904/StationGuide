// routes.js
import express from 'express';
import { getCloakroomBookingsByStation, getCoolieBookingsByStation, getStationBookings, getWheelchairBookingsByStation } from '../controllers/stationBookingsController.js';
import { createStation, getAllStations } from '../controllers/StationController.js';
import { sendOTPToEmail ,verifyOTPController, resetPassword} from '../controllers/submitFeedback.js';
const router = express.Router();

// Route to fetch all bookings for a station
router.get('/:id/bookings', getStationBookings);
router.get('/', getAllStations)
router.post('/', createStation);


// Routes to fetch specific types of bookings by station ID
router.get('/:id/coolies', getCoolieBookingsByStation);
router.get('/:id/wheelchairs', getWheelchairBookingsByStation);
router.get('/:id/cloakrooms', getCloakroomBookingsByStation);
router.post('/send-otp', sendOTPToEmail);
router.post('/verify-otp', verifyOTPController);
router.post('/reset-password', resetPassword);
export default router;
