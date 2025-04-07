import { FormInput } from "@/From/FormInput";
import React from "react";
import { z } from "zod";

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number required"),
  role: z.string().min(1, "Role is required"),
  department: z.string().min(1, "Department is required"),
  salary: z.string(),
  profilePicture: z.any().optional(), // if you want to handle file later
});

type SignUpData = z.infer<typeof signupSchema>;

const SignUpForm = () => {
  const fields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter first name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter last name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Enter phone number",
    },
    { name: "role", label: "Role", type: "select", options: ["Admin", "User"] },
    {
      name: "department",
      label: "Department",
      type: "select",
      options: ["HR", "Engineering", "Marketing"],
    },
    {
      name: "salary",
      label: "Salary",
      type: "number",
      placeholder: "Enter salary",
    },
    { name: "profilePicture", label: "Profile Picture", type: "file" },
  ];

  const handleSubmit = (data: SignUpData) => {
    console.log("Submitted:", data);
    // formData.append("profilePicture", data.profilePicture[0]) // if handling file
  };

  return (
    <FormInput
      schema={signupSchema}
      fields={fields}
      onSubmit={handleSubmit}
      title="Welcome To HRM"
    />
  );
};

export default SignUpForm;
