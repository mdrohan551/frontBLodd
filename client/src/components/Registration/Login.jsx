import React from 'react';
import SumbitButton from "./SumbitButton.jsx";
import UserStore from "../../store/userAuth.js";
import {FailAlert, SuccessAlert} from "../../Utility/utility.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    let {LoginFormOnchange, LoginFormValue, userLogin} = UserStore();
    const handleSubmit = async () => {
        // Validate if fields are empty
        if (!LoginFormValue.password || !LoginFormValue.phoneNumber) {
            await FailAlert("Please provide both phone number and password");
            return; // Stop further execution
        }

        let res = await userLogin({
            phoneNumber: LoginFormValue.phoneNumber,
            password: LoginFormValue.password,
        });
        console.log(res)

        if (res === false) {
            await FailAlert("Login failed. Please check your credentials.");
        } else {
            await SuccessAlert("Login successful");
            navigate("/");
        }
    };

    // key handle enter button

    return (
        <div>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card">
                    <h2>Try to Valid Password</h2>

                    <div className="inputBox">
                        <input type="Number" required="required" onChange={(e) => {
                            LoginFormOnchange("phoneNumber", e.target.value)
                        }}/>
                        <span>Number</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" required="required" onChange={(e) => {
                            LoginFormOnchange("password", e.target.value)
                        }}/>
                        <span>Password</span>
                    </div>
                    <SumbitButton onClick={handleSubmit}
                                  className="btn mt-3 btn-danger px-4" text="Enter"/>

                </div>
            </div>

        </div>
    );
};

export default Login;