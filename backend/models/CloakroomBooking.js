import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cloakroomBookingSchema = new Schema(
  {
    station: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: String,
      required: true,
      trim: true,
    },
    storageStartDate: {
      type: Date,
      required: true,
    },
    storageEndDate: {
      type: Date,
      required: true,
    },
    charges: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CloakroomBooking = mongoose.model('CloakroomBooking', cloakroomBookingSchema);
export default CloakroomBooking;
