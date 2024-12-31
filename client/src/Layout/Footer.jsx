import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-title-wrapper">
                <div className="footer-title-container">
                    <span className="line"></span>
                    <span className="title">Get Legal</span>
                    <span className="line"></span>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <nav>
                        <h6 className="footer-heading">Services</h6>
                        <a className="footer-link">Branding</a>
                        <a className="footer-link">Design</a>
                        <a className="footer-link">Marketing</a>
                        <a className="footer-link">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-heading">Company</h6>
                        <a className="footer-link">About us</a>
                        <a className="footer-link">Contact</a>
                        <a className="footer-link">Jobs</a>
                        <a className="footer-link">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-heading">Legal</h6>
                        <a className="footer-link">Terms of use</a>
                        <a className="footer-link">Privacy policy</a>
                        <a className="footer-link">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;