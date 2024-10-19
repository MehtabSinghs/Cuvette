import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ErrorMessage } from "@hookform/error-message";  
import { useForm } from "react-hook-form";  
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";

function Verification() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // State to manage OTP verification
    const [isMailVerified, setIsMailVerified] = useState(false);
    const [isMobVerified, setIsMobVerified] = useState(false);

    async function onSubmit(data) {
        try {
            const mailResponse = await fakeApiCall(data.mail_otp, 'mail');
            if (mailResponse.error) {
                alert("Error: " + mailResponse.error);
            } else {
                setIsMailVerified(true);
                alert("Success: " + mailResponse.message);
            }

            const mobResponse = await fakeApiCall(data.mob_otp, 'mobile');
            if (mobResponse.error) {
                alert("Error: " + mobResponse.error);
            } else {
                setIsMobVerified(true);
                alert("Success: " + mobResponse.message);
            }

            // Navigate to another page after both are verified
            if (isMailVerified && isMobVerified) {
                navigate('/menu'); // Replace with your desired navigation
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

    async function fakeApiCall(otp, type) {
        return new Promise((resolve) => {
            setTimeout(() => {
                
                if (otp === "998870") {
                    resolve({ message: `${type === 'mail' ? 'Email' : 'Mobile'} OTP verified successfully!` });
                } else {
                    resolve({ error: `Invalid ${type === 'mail' ? 'Email' : 'Mobile'} OTP.` });
                }
            }, 1000); // Simulate network delay
        });
    }

    return (
        <>
        <Header/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div className="row col-12 mt-3">
                        <div className="col-md-4 mt-3 align-content-center">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus perspiciatis quod error.
                                Quam facilis odit similique quis. Libero corrupti praesentium, dolor officia sunt iusto!
                                Consequuntur quaerat dignissimos quasi recusandae.
                            </p>
                        </div>

                        <div className="col-md-3 mt-3 align-content-center"></div>

                        {/* Form */}
                        <div className="col-md-4 ms-md-3 mt-5 align-content-center">
                            <div className="sign-up-form p-4 border rounded">
                                <h2 className="text-center mb-4">Sign Up</h2>
                                <p style={{ textAlign: 'center', fontSize: '16px', color: '#292929B2', fontFamily: 'DM Sans' }} className=' container '>Lorem Ipsum is simply dummy text</p>


                                {/* Email OTP  */}
                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                        <input 
                                            style={{ height: '59px' }} 
                                            type="text" 
                                            id="mail_otp" 
                                            className={`form-control ${errors.mail_otp ? 'is-invalid' : ''}`} 
                                            placeholder="Email OTP"
                                            {...register('mail_otp', { required: 'OTP is required' })}
                                        />
                                        {isMailVerified && <span className="input-group-text text-success"><i className="bi bi-check-circle-fill"></i></span>}
                                    </div>
                                    <ErrorMessage errors={errors} name="mail_otp" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary proceed-button">Verify</button>
                                </div><br />

                                {/* Mobile OTP Field */}
                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                                        <input 
                                            style={{ height: '59px' }} 
                                            type="text" 
                                            id="mob_otp" 
                                            className={`form-control ${errors.mob_otp ? 'is-invalid' : ''}`} 
                                            placeholder="Mobile OTP"
                                            {...register('mob_otp', { required: 'OTP is required' })}
                                        />
                                        {isMobVerified && <span className="input-group-text text-success"><i className="bi bi-check-circle-fill"></i></span>}
                                    </div>
                                    <ErrorMessage errors={errors} name="mob_otp" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary proceed-button">Verify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Verification;
