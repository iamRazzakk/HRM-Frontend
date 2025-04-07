import SingIn from "@/components/pages/Auth/SingIn";
import SignUpForm from "@/components/pages/Auth/Singup";

export const AuthRoutes = [
  {
    path: "register",
    element: <SignUpForm />,
  },
  {
    path: "login",
    element: <SingIn />,
  },
];
