import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FailAlert, SuccessAlert} from "../../Utility/utility.js";
import UserStore from "../../store/userAuth.js";
import toast from "react-hot-toast";
import {Modal} from "react-bootstrap";

const Update = () => {
    const {
        profileForm,
        profileFormChange,
        Profileupdate,
        profileDetailsRequest,
        profileDetails,
        DeleteUser,
        logout
    } = UserStore();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await profileDetailsRequest();
        })();
    }, []);

    // Handle Modal Delete
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // Registration
    const saveUser = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setLoading(true);
        let res = await Profileupdate(profileForm);
        if (res.status === 'success') {
            await SuccessAlert(res.message);
            await profileDetailsRequest();
            setLoading(false);
            navigate("/");
        } else {
            await FailAlert("User already exists. Please use a unique NID and phone number");
            setLoading(false);
        }
    };


    const onLogout = async () => {
        await logout();
        sessionStorage.clear();
        localStorage.clear();
        navigate("/")

    }

    // Delete User
    const DeleteSubmit = async () => {
        let res = await DeleteUser(profileForm.id)
        if (res === true) {
            toast.success("Delete User");
            await onLogout()

        } else {
            toast.error("something went wrong");
        }
    };


    return (
        <>
            <div className="registration-form ">
                <form onSubmit={saveUser}>
                    <h1 className="text-center p-2 fw-bold fs-1"><span className="text-danger">Blood</span> Donation
                    </h1>
                    <div className="form-icon">
                        <span><img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/blood-donation-icon.png"
                            className="w-75 h-75" alt=""/></span>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="FirstName"
                               value={profileForm.firstName}
                               onChange={(e) => profileFormChange('firstName', e.target.value)}
                               placeholder="FirstName"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="FirstName" name="lastName"
                               value={profileForm.lastName}
                               onChange={(e) => profileFormChange('lastName', e.target.value)}
                               placeholder="lastName"/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control item" id="phoneNumber" name="phoneNumber"
                               value={profileForm.phoneNumber}
                               onChange={(e) => profileFormChange('phoneNumber', e.target.value)}
                               placeholder="Phone Number"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="bloodGroup" placeholder="bloodGroup"
                               value={profileForm.bloodGroup}
                               onChange={(e) => profileFormChange('bloodGroup', e.target.value)}
                               name="bloodGroup"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="form-group">
                            <button disabled={loading} className="btn btn-block create-account">
                                {loading ? ("loading...") : ("Update")}
                            </button>
                        </div>
                        <button className="btn btn-danger" type="button" onClick={handleShow}>
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </form>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="text-uppercase ms-auto bg-danger text-white p-2 rounded-4">  {profileForm.firstName} !!!</h5>
                </Modal.Header>
                <Modal.Body>
                    <h3>Are You Sure You Want To Delete</h3>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-dark" onClick={handleClose}>Close</button>
                    <button className="btn btn-danger" type="button"
                            onClick={DeleteSubmit}> Yes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Update;
