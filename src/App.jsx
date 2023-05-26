import { Route, Routes } from "react-router-dom";
import Landingpage from "../src/pages/Landingpage/Landingpage";
import AdminLayout from "./pages/admin/Layout/AdminLayout";
import Login from "./pages/admin/Login/Login";
import "./App.css";

function App() {
     return (
          <div>
               <Routes>
                    <Route index element={<Landingpage />} />
                    <Route path="login-admin" element={<Login />} />
                    <Route path="admin/*" element={<AdminLayout />} />
               </Routes>
          </div>
     );
}

export default App;
