import { z } from "zod";

// Define Zod schema for the create Issue form
export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});

// Define Zod schema for the Login form
export const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Minimum length must be 6"),
  rememberMe: z.boolean(),
});
