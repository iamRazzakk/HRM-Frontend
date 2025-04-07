import ErrorPage from "@/components/pages/ErrrorPage/ErrorPage";
import AuthLayouts from "@/layout/AuthLayouts";
import MainLayouts from "@/layout/MainLayouts";
import { AuthRoutes } from "@/routes/auth.routes";
import { MainRoutes } from "@/routes/main.routes";
import { createBrowserRouter } from "react-router-dom";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      errorElement: <ErrorPage />,
      children: MainRoutes,
    },
    {
      path: "/auth",
      element: <AuthLayouts />,
      errorElement: <ErrorPage />,
      children: AuthRoutes,
    },
    // {
    //   path: "/auth",
    //   element: <AuthLayout />,
    //   children: AuthRouter,
    //   errorElement: <ErrorPage />,
    // },
    // {
    //   path: "/dashboard",
    //   element: <DashBoardLayout />,
    //   children: user?.role === "ADMIN" ? dashboardRouter : userRouter,
    //   errorElement: <ErrorPage />,
    // },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
};
