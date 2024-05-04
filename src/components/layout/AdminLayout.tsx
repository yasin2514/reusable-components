import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-[1] bg-purple-500 text-white">
        <Sidebar />
      </div>
      <div className="flex-[6]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;