import { loginSchema, LoginData } from "@/schemas/loginSchema";
import { loginFields } from "@/constants/loginFields";
import { FormInput } from "@/From/FormInput";

const SingIn = () => {
  const handleLogin = (data: LoginData) => {
    console.log("Login Submitted:", data);
  };

  return (
    <FormInput
      schema={loginSchema}
      fields={loginFields}
      onSubmit={handleLogin}
      title="Welcome to HRM"
      wrapperClassName="bg-white/50 backdrop-blur-md"
      fieldClassName="text-center font-bold text-4xl"
    />
  );
};

export default SingIn;
