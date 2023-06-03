import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";

import FontReguler from "../../../elements/FontReguler/FontReguler";
import logo from "../../../assets/img/login/logo.png";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
     const navigate = useNavigate();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [errorMessage, setErrorMessage] = useState("");

     const auth = getAuth();
     const handleLogin = (e) => {
          e.preventDefault();

          signInWithEmailAndPassword(auth, email, password)
               .then((response) => {
                    // Signed in
                    navigate("/admin");
                    sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
                    // ...
               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (email.length <= 0) {
                         toast.error("Masukkan Email");
                    }
                    if (errorCode === "auth/missing-password") {
                         toast.error("Masukkan Kata Sandi");
                    }
                    if (email.length > 0 && errorCode === "auth/invalid-email") {
                         toast.error("Email tidak valid");
                    }
                    if (errorCode === "auth/wrong-password") {
                         toast.error("Kata Sandi anda salah");
                    }
                    if (errorCode === "auth/user-not-found") {
                         toast.error("Pengguna tidak ditemukan");
                    }
               });
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
                                   <Input
                                        classLabel={"form-label"}
                                        className={"form-control"}
                                        value={password}
                                        label={"Kata Sandi*"}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                   />
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
