import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import {Toaster} from "react-hot-toast";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <>
            <AppNavbar/>
            {props.children}

            <Toaster position={'top-center'}/>
            <Footer/>
        </>
    );
};

export default MasterLayout;