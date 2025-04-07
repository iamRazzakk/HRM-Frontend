import { z } from "zod";

export const signupSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number required"),
    role: z.string().min(1, "Role is required"),
    department: z.string().min(1, "Department is required"),
    salary: z.string().min(1, "Salary is required"),
    profilePicture: z.any().optional(), // Optional file
});