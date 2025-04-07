import { RouterProvider } from "react-router-dom";
import { useRouter } from "./hooks/useRoutes";
function App() {
  const router = useRouter();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
