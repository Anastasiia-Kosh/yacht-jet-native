import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(2, "At least 2 characters").max(30),
  lastName: z.string().min(2, "At least 2 characters").max(30),
  email: z.email({ error: "Please enter a valid email" }),
  phone: z.string().min(10, "Please enter a valid phone number"),
});
export type BookingFormData = z.infer<typeof bookingSchema>;
