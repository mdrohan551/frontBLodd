import React from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AlluserPage from "./pages/AlluserPage.jsx";
import LoginPages from "./pages/LoginPages.jsx";
import UserStore from "./store/userAuth.js";
import UpdatePage from "./pages/UpdatePage.jsx";
import Error from "./components/Error/Error.jsx";
import Email from "./components/verifyed/Email.jsx";
import VerifyedPage from "./pages/VerifyedPage.jsx";
import toast, {Toaster} from 'react-hot-toast';
import OtpPage from "./pages/OtpPage.jsx";

const App = () => {

    const {isLogin} = UserStore()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}/>
                <Route path="/" element={<AlluserPage/>}/>
                <Route path="/reg" element={<Home/>}/>
                <Route path="/login" element={<LoginPages/>}/>


                {
                    isLogin() ? (
                        <>  <Route path="/Profile" element={<UpdatePage/>}/>
                            <Route path="/Email" element={<VerifyedPage/>}/>
                            <Route path="/OTP" element={<OtpPage/>}/>
                        </>
                    ) : (
                        <>
                            <Route path="/Profile" element={<Error/>}/>
                            <Route path="/Email" element={<Error/>}/>
                            <Route path="/OTP" element={<Error/>}/>
                        </>
                    )
                }

            </Routes>
        </BrowserRouter>
    );
};

export default App;