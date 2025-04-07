import { z } from "zod";
import { FormInput } from "@/From/FormInput";

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number required"),
  role: z.string().min(1, "Role is required"),
  department: z.string().min(1, "Department is required"),
  salary: z.string().min(1, "Salary is required"),
  profilePicture: z.any().optional(), // Optional file
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
    {
      name: "Address",
      label: "Address",
      type: "text",
      placeholder: "Enter Address",
    },
    {
      name: "Date of Birth",
      label: "Date of Birth",
      type: "Date",
      placeholder: "Enter Date",
    },
    {
      name: "Joining Date",
      label: "Joining Date",
      type: "Date",
      placeholder: "Enter Date",
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
    // formData.append("profilePicture", data.profilePicture[0]) // Handle file later
  };

  return (
    <FormInput
      schema={signupSchema}
      fields={fields}
      onSubmit={handleSubmit}
      title="Add Employee"
      wrapperClassName="flex justify-center items-center h-screen" // Center the form
      fieldClassName="text-center font-bold text-4xl"
    />
  );
};

export default SignUpForm;
