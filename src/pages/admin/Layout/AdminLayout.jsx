import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Transaction from "../Transaction/Transaction";
import Services from "../Services/Services";
import User from "../User/User";
import Setting from "../Setting/Setting";
import style from "./AdminLayout.module.css"

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/admin')
    }

    if (!authToken) {
      navigate('/login-admin')
    }
  }, [])

  return (
    <div className="adminLayout">
      <div className="container-fluid bg-width min-vh-100">
        <div className="row">
          <div style={{width:'180px', position: "fixed", top: 0, bottom: 0 }}>
            <Sidebar/>
          </div>
          <div className="col" style={{ overflow: "auto", height: "100vh", marginLeft:'180px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="transaksi" element={<Transaction />} />
              <Route path="layanan" element={<Services />} />
              <Route path="pengguna" element={<User />} />
              <Route path="pengaturan" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
