import {create} from 'zustand';

import axios from 'axios';
import cookie from "js-cookie"
import {getEmail, setEmail} from "../Utility/utility.js";


const UserStore = create((set) => ({
    // Login
    isFormSubmit: false,
    LoginFormValue: {phoneNumber: "", password: ""},
    // onchange
    LoginFormOnchange: (name, value) => {
        set((state) => ({
            LoginFormValue: {
                ...state.LoginFormValue,
                [name]: value
            }
        }))
    },
    userLogin: async (postBody) => {
        try {
            set({isFormSubmit: true});
            let res = await axios.post('https://bloodback-m8iw.onrender.com/api/v1/login', postBody);
            set({isFormSubmit: false});

            // Check if the response data status is 'success'
            if (res.data.status === 'success') {
                // then Login form set blank
                set({LoginFormValue: {phoneNumber: "", password: ""}})
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false; // Ensure false is returned in case of an error
        }
    },

    isLogin: () => {
        if (cookie.get('token')) {
            return true;
        } else {
            return false;
        }
    },


    logout: async () => {
        set({isFormSubmit: true});
        let res = await axios.post('https://bloodback-m8iw.onrender.com/api/v1/logout');
        set({isFormSubmit: false});
        if (res['status'] === 200) {
            cookie.remove('token');
            return true
        } else {
            false
        }
    },


    // profile form registration
    profileForm: {
        firstName: "",
        lastName: "",
        NIDNumber: "",
        phoneNumber: "",
        password: "",
        bloodGroup: "",
    },
    profileFormChange: (name, value) => {
        set((state) => ({
            profileForm: {
                ...state.profileForm,
                [name]: value
            }
        }))
    },


    profileSaveReq: async (postBody) => {
        try {

            let res = await axios.post('https://bloodback-m8iw.onrender.com/api/v1/registration', postBody);
            if (res.data['status'] === 'success') {
                return res.data;
            } else {
                return {
                    status: "fail",
                    message: "cancel save"
                }
            }

        } catch (err) {
            console.log(err)
        }
    },

    Profileupdate: async (postBody) => {
        try {

            let res = await axios.post('https://bloodback-m8iw.onrender.com/api/v1/ProfileUpdate', postBody);
            if (res.data['status'] === 'success') {
                return res.data;
            } else {
                return {
                    status: "fail",
                    message: "cancel update"
                }
            }

        } catch (err) {
            console.log(err)
        }
    },
    // To store the selected single user ID
    UserList: [],  // List of all users

    AlluserRequest: async () => {
        try {
            let res = await axios.get('https://bloodback-m8iw.onrender.com/api/v1/allUser');
            if (res.data['status'] === 'success') {
                set({UserList: res.data['data']});
            }
        } catch (err) {
            console.log(err);
        }
    },

    profileDetails: [],
    profileDetailsRequest: async () => {
        try {
            let res = await axios.get('https://bloodback-m8iw.onrender.com/api/v1/UserProfile');
            if (res.data.status === "success" && res.data.data) {
                set({profileDetails: res.data.data});
                set({profileForm: res.data.data});

            } else {
                set({profileDetails: []});
            }
        } catch (error) {
            console.error('Error:', error.response?.status || error.message);
        }
    },
    // isFormSubmit: false,
    emailFormValue: {email: ""},
    emailFormChange: (name, value) => {
        set((state) => ({
            emailFormValue: {
                ...state.emailFormValue,
                [name]: value
            }
        }))
    },

    otpFormValue: {otp: ""},
    otpFormChange: (name, value) => {
        set((state) => ({
            otpFormValue: {
                ...state.otpFormValue,
                [name]: value
            }
        }))
    },
    isUserSubmit: false,
    userOTPRequest: async (email) => {
        set({isUserSubmit: true});
        let res = await axios.get(`https://bloodback-m8iw.onrender.com/api/v1/UserOTP/${email}`);
        setEmail(email)
        set({isUserSubmit: false});
        if (res.data['status'] === "success") {
            return true
        } else {
            return false;
        }

    },
    verifyedOTP: async (OTP) => {
        set({isUserSubmit: true});
        let email = getEmail()
        let res = await axios.get(`https://bloodback-m8iw.onrender.com/api/v1/VerifyLogin/${email}/${OTP}`);
        set({isUserSubmit: false});
        if (res.data['status'] === "success") {
            return true
        } else {
            return false;
        }

    },


    DeleteUser: async (id) => {
        let res = await axios.post(`https://bloodback-m8iw.onrender.com/api/v1/DeleteUser/${id}`);
        if (res.data.status === 'success') {
            return true;
        } else {
            return false;
        }
    }


}))

export default UserStore;