// import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default MainLayouts;
