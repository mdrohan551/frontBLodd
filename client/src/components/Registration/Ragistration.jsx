import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FailAlert, SuccessAlert} from "../../Utility/utility.js";
import UserStore from "../../store/userAuth.js";

const Ragistration = () => {
    const navigate = useNavigate(); // Use `useNavigate` here
    const {profileForm, profileFormChange, profileSaveReq} = UserStore();
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const everyFormValueEmpty = () => {
        return Object.values(profileForm).some(value => value.trim() === '');
    };

    useEffect(() => {
        // Enable or disable the submit button based on whether all fields are filled
        setButtonDisabled(everyFormValueEmpty());
    }, [profileForm]);

    // Registration
    const saveUser = async () => {
        setLoading(true);
        if (everyFormValueEmpty()) {
            await FailAlert("Please fill out all fields");
            setLoading(false);
        } else {
            let res = await profileSaveReq(profileForm);
            if (res.status === 'success') {
                await SuccessAlert(res.message);
                setLoading(false);
                navigate("/login"); // Use the navigate function here
            } else {
                await FailAlert("User already exists. Please use a unique NID and phone number");
                setLoading(false);
            }
        }
    };

    return (
        <>
            <div className="registration-form">

                <form>
                    <h1 className="text-center p-2 fw-bold fs-1"><span className="text-danger">Blood</span> Donation
                    </h1>
                    <div className="form-icon">
                        <span><img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/blood-donation-icon.png"
                            className="w-75 h-75" alt=""/></span>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="FirstName"
                               onChange={(e) => profileFormChange('firstName', e.target.value)}
                               placeholder="FirstName"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="FirstName" name="lastName"
                               onChange={(e) => profileFormChange('lastName', e.target.value)}
                               placeholder="lastName"/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control item" id="phoneNumber" name="phoneNumber"
                               onChange={(e) => profileFormChange('phoneNumber', e.target.value)}
                               placeholder="Phone Number"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="NIDNumber" name="NIDNumber"
                               onChange={(e) => profileFormChange('NIDNumber', e.target.value)}
                               placeholder="NIDNumber"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" name="password"
                               onChange={(e) => profileFormChange('password', e.target.value)}
                               placeholder="Password"/>
                    </div>


                    <div className="form-group">
                        <select
                            className="form-control item"
                            id="bloodGroup"
                            name="bloodGroup"
                            onChange={(e) => profileFormChange('bloodGroup', e.target.value)}
                            value={profileForm.bloodGroup || ''}
                        >
                            <option value="">Select Blood Group</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button
                            disabled={isButtonDisabled || loading}
                            className="btn btn-block create-account"
                            onClick={saveUser}>
                            {loading ? ("loading...") : ("Create account")}
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Ragistration;
