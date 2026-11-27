import type { BookingFormData } from "@/schemas/bookingSchema";
import type { TripItem } from "./trip";

export type BookingStatus = "pending" | "cancelled";

export type Booking = {
  id: string;
  trip: Pick<
    TripItem,
    "id" | "title" | "location" | "price" | "duration" | "yachtType"
  >;
  customer: BookingFormData;
  returnDate: string;
  createdAt: string;
  status: BookingStatus;
};

export type NewBooking = Omit<Booking, "id" | "createdAt" | "status">;
