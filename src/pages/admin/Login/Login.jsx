import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { InputGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useEffect } from "react";
import api from "../../../config/https"

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
     const [errMessage, setErrMessage] = useState("")
     const [passwordShown, setPasswordShown] = useState(false);

     useEffect(() => {
          let authToken = sessionStorage.getItem("Auth Token");

          if (authToken) {
               navigate("/admin/dashboard");
          }
     }, []);

     const handleLogin = (e) => {
          e.preventDefault();

          if (validate()) {
               api.post(`login`, {
                    email,
                    password,
                    headers: {
                         "Content-type": "application/json",
                    },
               })
                    .then((response) => {
                         navigate("/admin/dashboard");
                         ModalSuccess();
                         sessionStorage.setItem("Auth Token", response.data.data.token);
                    })
                    .catch((error) => {
                         console.log(error);
                         setError(true);
                         const errorCode = error.response.data.message;
                         if (errorCode === "user not found") {
                              setErrMessage(" Pengguna tidak ditemukan")
                         }

                         if (errorCode === "invalid email or password") {
                              setErrMessage(" Kata sandi salah")
                         }
                    });
          }
     };

     const regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

     const validate = () => {
          let result = true;

          if (email === "" || email === null) {
               result = false;
               toast.warning("Masukkan Email");
          }

          if (!regexEmail.test(email) && email.length > 0) {
               result = false;
               toast.warning("Masukkan Email Yang Valid");
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
                                             className={error ? "invalid" : "input-password"}                                             
                                        />
                                        <Button
                                             className={error ? "invalid" : "button-eye"}                                        
                                             onClick={togglePassword}
                                        >
                                             {passwordShown ? (
                                                  <BsEye className="icon-login"/>
                                             ) : (
                                                  <BsEyeSlash className="icon-login"/>
                                             )}
                                        </Button>
                                   </InputGroup>
                                   <p className="error-message">
                                        {error ? <BiErrorCircle /> : ""}
                                        {errMessage}
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
