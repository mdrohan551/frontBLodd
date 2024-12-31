import React, {useEffect} from 'react';
import CommonButton from "./CommonButton.jsx";
import {useNavigate} from "react-router-dom";
import userAuth from "../../store/userAuth.js";
import ValidationHelper from "../../Utility/validationHelper.js";
import toast from "react-hot-toast";
import {FailAlert, SuccessAlert} from "../../Utility/utility.js";
import successSound from "../../assets/success.mp3"; // Replace with the actual path to your success sound file
import failSound from "../../assets/fail.mp3"; // Replace with the actual path to your fail sound file

const Otp = () => {
    const navigate = useNavigate();
    let {verifyedOTP, otpFormValue, otpFormChange, profileDetails, profileDetailsRequest} = userAuth();

    const successAudio = new Audio(successSound);
    const failAudio = new Audio(failSound);

    useEffect(() => {
        (async () => {
            await profileDetailsRequest();
        })();
    }, []);

    const onFormSubmit = async () => {
        if (!ValidationHelper.IsEmpty(otpFormValue.otp)) {
            let res = await verifyedOTP(otpFormValue.otp);
            if (res === true) {
                await successAudio.play(); // Play success sound
                await SuccessAlert(`congratulations! you are verified ${profileDetails.firstName}`);
                navigate("/");
            } else if (res === false) {
                await failAudio.play(); // Play fail sound
                await FailAlert("NOT verified OTP verification");
            }
        } else {
            toast.error("Otp address is required");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center pt-5">
            <div className="form-container">
                <div className="logo-container">Please add Valid OTP</div>
                <div className="form-group">
                    <label htmlFor="number">OTP</label>
                    <input
                        required=""
                        placeholder="Enter your OTP"
                        id="number"
                        type="Number"
                        onChange={(e) => otpFormChange("otp", e.target.value)}
                        value={otpFormValue.otp}
                    />
                </div>
                <CommonButton
                    onClick={onFormSubmit}
                    className="btn mt-3 btn-danger px-4"
                    text="Enter"
                />
            </div>
        </div>
    );
};

export default Otp;
