import React, { useEffect, useState } from 'react';
import Loading from "../../Layout/Loading.jsx";
import { Link, useNavigate } from "react-router-dom";
import UserStore from "../../store/userAuth.js";


const AllUser = () => {
    const navigate = useNavigate();
    const { AlluserRequest, UserList, isLogin, profileDetailsRequest, profileDetails } = UserStore()
    useEffect(() => {
        (async () => {
            await AlluserRequest()
            await profileDetailsRequest()

        })()
    }, []);


    return (<>


        <section className="banner ">
            <div className="container">
               <div className="row">
                <div className="col-lg-7">
                <div className="banner-text">
                    <h1>
                        {isLogin() ? (
                            profileDetails.verify === true ? (
                                <>
                                    <span className="fs-6 text-uppercase text-black-50">Welcome,</span>
                                    <span className="p-2 text-uppercase">{profileDetails.firstName}</span>
                                    <br />
                                    <span className="fw-bold">
                                        NID NO: <span className="fw-normal text-danger">{profileDetails.NIDNumber}</span>
                                    </span>
                                    <br />
                                    <span className="text-uppercase">Blood Group: <span
                                        className="text-danger">{profileDetails.bloodGroup}</span></span>
                                </>
                            ) : (
                                <>
                                    <span className="fs-2 text-danger text-uppercase">You Are NOT verified</span>
                                    <p className='NOTverify'>Please Scroll Down And Click GO
                                        Verify
                                        button
                                    </p>
                                </>
                            )
                        ) : (
                            <>
                                <h1>Blood <span className="text-info">Donation</span></h1>
                                <p>Please ensure your details are genuine. This platform is dedicated to facilitating life-saving blood donations</p>
                            </>
                        )}
                    </h1>


                    {isLogin() ? (
                        <Link className="button  mt-5" to="/Profile">Profile</Link>
                    ) : (
                        <Link className="button  mt-5" to="/reg">Sign Up</Link>
                    )}


                </div>
                </div>
                <div className="col-lg-5">
                <img className="banner-image" alt="monitoring " src="blood.jpg" />
                </div>
               </div>
            </div>
           
        </section>


        <div className="container mt-5 pt-5 ">
            <div className="row">
                <h1 className="text-center fw-bold py-2"> COLLECTED <span className="text-danger">BLOOD</span>
                </h1>
                {UserList.length === 0 ? (<Loading />) : UserList.map((item, i) => {

                    if (profileDetails._id === item._id) {
                        return (<div className="col-lg-3  py-5">

                            <div className="plan">
                                <div className="inner">
                                    <span className="pricing">
                                        <span>{item['bloodGroup']}</span>
                                    </span>
                                    <p className="title">{item['firstName']} {item['lastName']}</p>
                                    <ul className="features">
                                        <li>
                                            <span className="icon">
                                                <svg height="24" width="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path fill="currentColor"
                                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                </svg>
                                            </span>
                                            <span>{item['NIDNumber']}</span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <svg height="24" width="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path fill="currentColor"
                                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                </svg>
                                            </span>
                                            <span>	{item['bloodGroup']}</span>
                                        </li>
                                        <li>


                                            {item.verify === false ? (<>
                                                <svg height="24" width="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path fill="red"
                                                        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
                                                </svg>
                                                {isLogin() ? (<>
                                                    <span
                                                        className="d-flex"><span>User Not Verified </span>  <Link
                                                            className="bg-danger text-white p-1 rounded-3 veryfiedIcon"
                                                            to='/Email'>GO Verify</Link></span></>)

                                                    : (<>
                                                        <span className="d-flex">
                                                            <span>User Not Verified </span>
                                                        </span>
                                                    </>)}

                                            </>) : (<>
                                                <span className="icon">
                                                    <svg height="24" width="24" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                        <path fill="currentColor"
                                                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                    </svg>
                                                </span>
                                                <span>verified user</span>

                                            </>)}


                                        </li>
                                    </ul>
                                    {item.verify === false ? (<>
                                        <div className="action">
                                            <a className="button disabled"
                                            >Contact
                                                user</a>
                                        </div>
                                    </>) : (<>
                                        <div className="action">
                                            <a className="button" disabled={false}
                                                href={`tel:${item['phoneNumber']}`}>Contact
                                                user</a>

                                        </div>
                                    </>)}


                                </div>
                            </div>
                        </div>)
                    } else {
                        return (<div className="col-lg-3  py-5">

                            <div className="plan">
                                <div className="inner">
                                    <span className="pricing">
                                        <span>{item['bloodGroup']}</span>
                                    </span>
                                    <p className="title">{item['firstName']} {item['lastName']}</p>
                                    <ul className="features">
                                        <li>
                                            <span className="icon">
                                                <svg height="24" width="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path fill="currentColor"
                                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                </svg>
                                            </span>
                                            <span>{item['NIDNumber']}</span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <svg height="24" width="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path fill="currentColor"
                                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                </svg>
                                            </span>
                                            <span>	{item['bloodGroup']}</span>
                                        </li>
                                        <li>


                                            {item.verify === false ? (<>
                                                <svg height="24" width="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path fill="red"
                                                        d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
                                                </svg>
                                                <span
                                                    className="d-flex"><span>User Not Verified </span>
                                                </span>
                                            </>) : (<>
                                                <span className="icon">
                                                    <svg height="24" width="24" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                        <path fill="currentColor"
                                                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                    </svg>
                                                </span>
                                                <span>verified user</span>

                                            </>)}


                                        </li>
                                    </ul>
                                    {item.verify === false ? (<>
                                        <div className="action">
                                            <a className="button disabled"
                                            >Contact
                                                user</a>
                                        </div>
                                    </>) : (<>
                                        <div className="action">
                                            <a className="button" disabled={false}
                                                href={`tel:${item['phoneNumber']}`}>Contact
                                                user</a>
                                        </div>
                                    </>)}


                                </div>
                            </div>
                        </div>)
                    }
                })}


            </div>
        </div>


    </>);
};

export default AllUser;