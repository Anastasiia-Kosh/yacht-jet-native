import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(2, "At least 2 characters").max(30),
  lastName: z.string().min(2, "At least 2 characters").max(30),
  email: z.email({ error: "Please enter a valid email" }),
  phone: z.string().min(10, "Please enter a valid phone number"),
  guests: z.number().int().min(1, "At least 1 guest"),
  departureDate: z.string().min(1, "Please select departure date"),
});
export type BookingFormData = z.infer<typeof bookingSchema>;
