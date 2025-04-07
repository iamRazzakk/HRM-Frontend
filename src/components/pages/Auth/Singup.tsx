import { z } from "zod";
import { FormInput } from "@/From/FormInput";
import { signupSchema } from "@/schemas/signupSchema";
import { fields } from "@/constants/fields";

type SignUpData = z.infer<typeof signupSchema>;

const SignUpForm = () => {
  const handleSubmit = (data: SignUpData) => {
    console.log("Submitted:", data);
  };

  return (
    <FormInput
      schema={signupSchema}
      fields={fields}
      onSubmit={handleSubmit}
      title="Add Employee"
      wrapperClassName="flex justify-center items-center h-screen"
      fieldClassName="text-center font-bold text-4xl"
    />
  );
};

export default SignUpForm;
