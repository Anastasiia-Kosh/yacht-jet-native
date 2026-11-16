import { z } from "zod";

export const profileStorageSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.string(),
  avatar: z.string(),
});

export const profileSchema = z.object({
  firstName: z.string().min(2, "At least 2 characters").max(30),
  lastName: z.string().min(2, "At least 2 characters").max(30),
  email: z.email({ error: "Please enter a valid email" }),
  phone: z.string().min(10, "Please enter a valid phone number"),
  country: z.string().min(2, "At least 2 characters").max(30),
  avatar: z.string(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
