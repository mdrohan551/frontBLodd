import React from 'react';
import CommonButton from "./CommonButton.jsx";
import userAuth from "../../store/userAuth.js";
import ValidationHelper from "../../Utility/validationHelper.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";


const Email = () => {
    const navigate = useNavigate()
    let {emailFormValue, emailFormChange, userOTPRequest} = userAuth()
    const onFormSubmit = async () => {
        if (!ValidationHelper.IsEmail(emailFormValue.email)) {
            toast.error("Email address is required");
        } else {
            let res = await userOTPRequest(emailFormValue.email);
            res ? navigate("/OTP") : toast.error("something went wrong");
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center pt-5">
            <div className="form-container">
                <div className="logo-container"> Get OTP Your Mail</div>

                <div className="form-group">
                    <label htmlFor="email">Email Here</label>
                    <input
                        required=""
                        placeholder="Enter your Email"
                        id="email"
                        type="email"
                        onChange={(e) => emailFormChange("email", e.target.value)}
                        value={emailFormValue.email}
                    />
                </div>
                <CommonButton onClick={onFormSubmit}
                              className="btn mt-3 btn-danger px-4" text="Enter"/>


            </div>
        </div>
    );
};

export default Email;