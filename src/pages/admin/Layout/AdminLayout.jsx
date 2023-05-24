import { Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Transaction from "../Transaction/Transaction";
import Services from "../Services/Services";
import User from "../User/User";
import Setting from "../Setting/Setting";
import style from "./AdminLayout.module.css"
import Bpjs from "../Services/Bpjs/Bpjs";
import Wifi from "../Services/Wifi/Wifi";
import Pendidikan from "../Services/Education/Education";
import AddBpjs from "../Services/Bpjs/AddBpjs";
import EditBpjs from "../Services/Bpjs/EditBpjs";
import AddWifi from "../Services/Wifi/AddWifi";
import EditWifi from "../Services/Wifi/EditWifi";

const AdminLayout = () => {
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
              <Route path="layanan/bpjs" element={<Bpjs />} />
              <Route path="layanan/bpjs/tambah" element={<AddBpjs />} />
              <Route path="layanan/bpjs/edit" element={<EditBpjs />} />
              <Route path="layanan/wifi" element={<Wifi />} />
              <Route path="layanan/wifi/tambah" element={<AddWifi />} />
              <Route path="layanan/wifi/edit" element={<EditWifi />} />
              <Route path="layanan/pendidikan" element={<Pendidikan />} />
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
