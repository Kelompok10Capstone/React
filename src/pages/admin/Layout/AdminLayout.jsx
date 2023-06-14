import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
import AddEducation from "../Services/Education/AddEducation";
import EditEducation from "../Services/Education/EditEducation";

import Pln from "../Services/Pln/Pln";
import AddPln from "../Services/Pln/AddPln";
import EditPln from "../Services/Pln/EditPln";
import Pdam from "../Services/Pdam/Pdam";
import AddPdam from "../Services/Pdam/AddPdam";
import EditPdam from "../Services/Pdam/EditPdam";
import Topup from "../Services/Topup/Topup";
import AddTopup from "../Services/Topup/AddTopup";
import EditTopup from "../Services/Topup/EditTopup";
import PulsadanData from "../Services/PulsadanData/PulsadanData";
import AddPulsadanData from "../Services/PulsadanData/AddPulsadanData";
import EditPulsadanData from "../Services/PulsadanData/EditPulsadanData";
import Promo from "../Services/Promo/Promo";
import AddPromo from "../Services/Promo/AddPromo";
import EditPromo from "../Services/Promo/EditPromo";
import DetailUser from "../User/Detail/DetailUser";

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
              <Route path="layanan/bpjs" element={<Bpjs />} />
              <Route path="layanan/bpjs/tambah" element={<AddBpjs />} />
              <Route path="layanan/bpjs/edit" element={<EditBpjs />} />

              <Route path="layanan/wifi" element={<Wifi />} />
              <Route path="layanan/wifi/tambah" element={<AddWifi />} />
              <Route path="layanan/wifi/edit" element={<EditWifi />} />

              <Route path="layanan/pendidikan" element={<Pendidikan />} />
              <Route path="layanan/pendidikan/tambah" element={<AddEducation />} />
              <Route path="layanan/pendidikan/edit" element={<EditEducation />} />

              <Route path="layanan/promo" element={<Promo/>}/>
              <Route path="layanan/promo/tambah" element={<AddPromo/>}/>
              <Route path="layanan/promo/edit" element={<EditPromo/>}/>


              <Route path="layanan/pln" element={<Pln />} />
              <Route path="layanan/pln/tambah" element={<AddPln />} />
              <Route path="layanan/pln/edit" element={<EditPln />} />

              <Route path="layanan/pdam" element={<Pdam />}/>
              <Route path="layanan/pdam/tambah" element={<AddPdam />}/>
              <Route path="layanan/pdam/edit" element={<EditPdam />}/>


              <Route path="layanan/topup" element={<Topup/>} />
              <Route path="layanan/topup/tambah" element={<AddTopup/>}/>
              <Route path="layanan/topup/edit" element={<EditTopup/>}/>
              <Route path="layanan/pulsadandata" element={<PulsadanData/>}/>
              <Route path="layanan/pulsadandata/tambah" element={<AddPulsadanData/>}/>
              <Route path="layanan/pulsadandata/edit" element={<EditPulsadanData/>}/>

              <Route path="pengguna" element={<User />} />
              <Route path="pengguna/detail-pengguna/:id" element={<DetailUser />}/>
              <Route path="pengaturan" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
