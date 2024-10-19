import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ErrorMessage } from "@hookform/error-message";  
import { useForm } from "react-hook-form";  
import { useNavigate } from "react-router-dom";
import React from "react";

function CompanySignUp() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        try {
           
            const response = await fakeApiCall(data);

            if (response.error) {
                alert("Error: " + response.error);
            } else {
                alert("Success: " + response.message);
                navigate('/Verification'); // Navigate to the verification page
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
    async function fakeApiCall(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate success or error based on the data
                if (data.email === "error@example.com") {
                    resolve({ error: "An error occurred." });
                } else {
                    resolve({ message: "Registration successful!" });
                }
            }, 100); // Simulate network delay
        });
    }

    return (
        <>
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

                               {/* Name */}
                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                                        <input 
                                            style={{ height: '59px' }}
                                            type="text"
                                            id="name"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Name"
                                            {...register('name', { required: 'Name is required' })}
                                        />
                                    </div>
                                    <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>

                               {/* Phone */}
                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                                        <input 
                                            style={{ height: '59px' }} 
                                            type="text" 
                                            id="phone" 
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                                            placeholder="Phone no"
                                            {...register('phone', { required: 'Phone number is required' })}
                                        />
                                    </div>
                                    <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>
                                {/* Company */}
                                <div className="form-group mb-3">
                                    <div className='input-group'>
                                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                                        <input 
                                            style={{ height: '59px' }} 
                                            type="text" 
                                            id="company" 
                                            className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                                            placeholder="Company Name"
                                            {...register('company', { required: 'Company name is required' })}
                                        />
                                    </div>
                                    <ErrorMessage errors={errors} name="company" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>
                                {/* Email */}
                                <div className="form-group mb-3">
                                    <div className='input-group'>
                                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                        <input 
                                            style={{ height: '59px' }} 
                                            type="email" 
                                            id="email" 
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            placeholder="Company Email"
                                            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                                        />
                                    </div>
                                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>
                                {/* Emp Size */}
                                <div className="form-group mb-3">
                                    <div className='input-group'>
                                        <span className='input-group-text'><i className="bi bi-people-fill"></i></span>
                                        <input 
                                            style={{ height: '59px' }} 
                                            type="text" 
                                            id="employee-size" 
                                            className={`form-control ${errors.employeeSize ? 'is-invalid' : ''}`} 
                                            placeholder="Employee Size"
                                            {...register('employeeSize', { required: 'Employee size is required' })}
                                        />
                                    </div>
                                    <ErrorMessage errors={errors} name="employeeSize" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
                                </div>

                                <p className="terms text-center mb-4">
                                    By clicking on proceed you will accept our <a href="#terms">Terms & Conditions</a>
                                </p>
                                {/* Submit */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary proceed-button">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CompanySignUp;
