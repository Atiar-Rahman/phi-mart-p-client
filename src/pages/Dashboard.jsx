import { useState } from "react";
import {
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen}></Navbar>

        {/* Main content */}
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard icon={FiPackage} title={'Total Products'} value={245}/>
            <StatCard icon={FiShoppingCart} title={'Total Orders'} value={128}/>
            <StatCard icon={FiUsers} title={'Total Users'} value={573}/>
            <StatCard icon={FiStar} title={'Average Rating'} value={4.8}/>
          </div>

          <Order></Order>
        </main>
      </div>
 
      {/* Sidebar */}
      <Sidebar></Sidebar>
    </div>
  );
}
