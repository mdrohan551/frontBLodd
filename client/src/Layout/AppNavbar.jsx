import React, {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import UserStore from "../store/userAuth.js";
import SumbitButton from "../components/Registration/SumbitButton.jsx";

const AppNavbar = () => {
    const navigate = useNavigate();
    const {isLogin, logout} = UserStore();
    const onLogout = async () => {
        await logout();
        sessionStorage.clear();
        localStorage.clear();
        navigate("/login")

    }

    const GetNav = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                GetNav.current.classList.add('scrolled');
            } else {
                GetNav.current.classList.remove('scrolled');
            }
        })
    }, []);

    return (
        <div>

            <nav ref={GetNav} className="navbar navbar-expand-lg bg-body-tertiary main_menu ">
                <div className="container">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128">
                            <path
                                d="M85.232 82.549a21.54 21.54 0 0 1-43.08 0c0-11.9 21.54-34.882 21.54-34.882s21.54 22.986 21.54 34.882z"
                                fill="#e60c3b"/>
                            <path
                                d="M52.009 44.81a7.478 7.478 0 1 1-14.956 0c0-4.13 7.478-12.11 7.478-12.11s7.478 7.98 7.478 12.11z"
                                fill="#f8495d"/>
                            <path
                                d="M74.067 32.312a5.188 5.188 0 1 1-10.375 0c0-2.865 5.188-8.4 5.188-8.4s5.187 5.535 5.187 8.4z"
                                fill="#e60c3b"/>
                            <path
                                d="M90.947 61.245a9.069 9.069 0 1 1-18.138 0c0-5.009 9.069-14.687 9.069-14.687s9.069 9.678 9.069 14.687z"
                                fill="#f8495d"/>
                            <path fill="#95edf7"
                                  d="M71.609 78.25h-4.167v-4.167h-7.5v4.167h-4.167v7.5h4.167v4.167h7.5V85.75h4.167v-7.5z"/>
                        </svg>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>


                            {
                                isLogin() ? (
                                    <>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Profile">Profile</Link>

                                        </li>
                                        <li className="nav-item">
                                            <SumbitButton onClick={onLogout} className="btn ms-3 btn-danger d-flex"
                                                          text="logout"/>

                                        </li>
                                    </>
                                ) : <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/reg'>Ragistration</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>

                                </>
                            }
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )

};

export default AppNavbar;