import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../../config/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { InputGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { API_BASE } from "../../../config/Api";
import { useEffect } from "react";
import axios from "axios";

import FontReguler from "../../../elements/FontReguler/FontReguler";
import logo from "../../../assets/img/login/logo.png";
import Input from "../../../elements/Input/Input";
import ModalSuccess from "../../../elements/Modal/ModalLogin/ModalSuccess/ModalSuccess";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
     const navigate = useNavigate();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState(false);
     const [passwordShown, setPasswordShown] = useState(false);

     useEffect(() => {
          let authToken = sessionStorage.getItem("Auth Token");

          if (authToken) {
               navigate("/admin");
          }
     }, []);

     const handleLogin = (e) => {
          e.preventDefault();

          if (validate()) {
               axios.post(`${API_BASE}/login`, {
                    email,
                    password,
                    headers: {
                         "Content-type": "application/json",
                    },
               })
                    .then((response) => {
                         navigate("/admin");
                         ModalSuccess();
                         sessionStorage.setItem("Auth Token", response.data.data.token);
                    })
                    .catch((error) => {
                         console.log(error);
                         setError(true);
                    });
          }
     };

     const validate = () => {
          let result = true;

          if (email === "" || email === null) {
               result = false;
               toast.warning("Masukkan Email");
          }
          if (password === "" || password === null) {
               result = false;
               toast.warning("Masukkan Password");
          }
          return result;
     };

     const togglePassword = () => {
          setPasswordShown(!passwordShown);
     };

     return (
          <div className="login">
               <div className="row m-0">
                    <div className="login-left col-lg-5 d-flex justify-content-center align-items-center flex-column">
                         <img src={logo} alt="" width={85} className="img-fluid mx-auto" />
                         <FontReguler $28 className="text-light mt-1">
                              SkuyPay
                         </FontReguler>
                    </div>
                    <div className="login-right col-lg-7 col-10 mx-auto mt-lg-0 mt-5 d-flex align-items-center">
                         <div className="col-lg-7 col-12 mx-auto">
                              <form className="d-flex flex-column">
                                   <Input
                                        classLabel={"form-label"}
                                        className={"form-control mb-4"}
                                        value={email}
                                        label={"Email*"}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                   />
                                   <FormLabel>Kata Sandi*</FormLabel>
                                   <InputGroup className="mb-3">
                                        <FormControl
                                             value={password}
                                             type={passwordShown ? "text" : "password"}
                                             onChange={(e) => setPassword(e.target.value)}
                                             name="password"
                                             className={error ? "invalid" : ""}
                                             style={{ borderRight: "none" }}
                                        />
                                        <Button
                                             className={error ? "invalid" : ""}
                                             style={{
                                                  backgroundColor: "transparent",
                                                  borderLeft: "none",
                                                  color: "#393737",
                                                  borderColor: "#CED4DA",
                                                  fontSize: "16px",
                                             }}
                                             onClick={togglePassword}
                                        >
                                             {passwordShown ? (
                                                  <BsEye style={{ fontSize: "21px" }} />
                                             ) : (
                                                  <BsEyeSlash style={{ fontSize: "21px" }} />
                                             )}
                                        </Button>
                                   </InputGroup>
                                   <p className="error-message">
                                        {error ? <BiErrorCircle /> : ""}
                                        {error ? " Kata sandi salah" : ""}
                                   </p>
                                   <ToastContainer />
                                   <button
                                        className="col-12 button-login mt-4"
                                        type="button"
                                        onClick={handleLogin}
                                   >
                                        Masuk
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;
