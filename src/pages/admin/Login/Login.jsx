import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebaseConfig";

import FontReguler from "../../../elements/FontReguler/FontReguler";
import logo from "../../../assets/img/login/logo.png";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import "./Login.css";

const Login = () => {
     const navigate = useNavigate();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [errorMessage, setErrorMessage] = useState("");

     const auth = getAuth(app);
     const onLogin = (e) => {
          e.preventDefault();

          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/admin");
                    // ...
               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
               });
     };

     return (
          <div className="login">
               <div className="row m-0">
                    <div className="login-left col-lg-5 d-flex justify-content-center align-items-center flex-column">
                         <img src={logo} alt="" width={85} className="img-fluid" />
                         <FontReguler $28 className="text-light mt-1">
                              SkuyPay
                         </FontReguler>
                    </div>
                    <div className="login-right col-lg-7 col-10 mx-auto mt-lg-0 mt-5 d-flex align-items-center">
                         <div className="col-lg-6 col-12 mx-auto">
                              <form>
                                   <Input
                                        classLabel={"form-label"}
                                        className={"form-control mb-3"}
                                        value={email}
                                        label={"Email*"}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                   />
                                   <Input
                                        classLabel={"form-label"}
                                        className={"form-control mb-3"}
                                        value={password}
                                        label={"Password*"}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                   />
                                   <FontReguler $16 className="text-danger">
                                        {errorMessage}
                                   </FontReguler>
                                   <Button
                                        $login
                                        className="col-lg-12 col-12 py-2 mt-2"
                                        type="button"
                                        onClick={onLogin}
                                   >
                                        Masuk
                                   </Button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;
