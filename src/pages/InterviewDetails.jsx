import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function InterviewDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
       
        const response = await fakeApiCall(data);

        if (response.error) {
            alert("Error: " + response.error);
        } else {
            alert("Success: " + response.message);
            navigate('/menu'); // Navigate to the verification page
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
      {/* Menu header */}
      <div className="container d-md-block r">
        <header className="row align-items-center py-2">
          <div className="col-6 col-md-4">
            <img src="/src/assets/images/image 650 1.png" alt="cuvette" className="cuvette img-fluid" />
          </div>
          <div className="col-6 col-md-8 text-end d-flex justify-content-end align-items-center">
            <span className="contact me-3">Contact</span><br />
            <nav className="navbar navbar-light bg-light p-0" style={{ border: '2px solid black', borderRadius: '5px' }}>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ><span className="bi bi-person"> </span>
                  Your Name
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><Link to='/companysignup' className="dropdown-item" style={{ textDecoration: 'none' }}>Logout</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <hr />

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-1 col-lg-1 d-md-block bg-light min-vh-100 border ">
            <div className="position-sticky">
              <ul style={{ alignContent: 'center' }} className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span style={{ color: 'grey' }} className="bi bi-house-fill fs-1"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-8 ms-sm-auto col-lg-10 px-4">
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
  <div className="col-md-10 ms-md-3 mt-5 align-content-center">
    {/* Job Title */}
    <div className="form-group mb-4 d-flex align-items-center">
    <label className="col-md-3 form-label" style={{ fontWeight: '400', fontSize: "32px" }}>Job Title</label>
      <div className="col-md-6">
        <input
          style={{ height: '50px' }}
          type="text"
          className={`form-control rounded ${errors.title ? 'is-invalid' : ''}`}
          {...register('title', { required: 'Field is required' })}
        />
        <ErrorMessage errors={errors} name="title" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
      </div>
        </div>

    {/* Job Description */}
    <div className="form-group mb-4 row align-items-center">
      <label className="col-md-3 form-label" style={{ fontWeight: '400', fontSize: "32px" }}>Job Description</label>
      <div className="col-md-6">
        <textarea
          style={{ height: '100px', width: '100%' }}
          className={`form-control rounded ${errors.description ? 'is-invalid' : ''}`}
          {...register('description', { required: 'Field is required' })}
        />
        <ErrorMessage errors={errors} name="description" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
      </div>
    </div>

    {/* Experience Level */}
    <div className="form-group mb-4 row align-items-center">
      <label className="col-md-3 form-label" style={{ fontWeight: '400', fontSize: "32px" }}>Experience Level</label>
      <div className="col-md-6">
        <select
          className={`form-select ${errors.experience ? 'is-invalid' : ''}`}
          {...register('experience', { required: 'Field is required' })}
        >
          <option value="">Select Experience Level</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid-Level</option>
          <option value="senior">Senior</option>
        </select>
        <ErrorMessage errors={errors} name="experience" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
      </div>
    </div>

    {/* Add Candidate */}
    <div className="form-group mb-4 row align-items-center">
      <label className="col-md-3 form-label" style={{ fontWeight: '400', fontSize: "32px" }}>Add Candidate</label>
      <div className="col-md-6">
        <input
          style={{ height: '50px' }}
          type="email"
          className={`form-control rounded ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', { required: 'Field is required', pattern: /^\S+@\S+$/i })}
        />
        <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
      </div>
    </div>

    {/* End Date */}
    <div className="form-group mb-4 row align-items-center">
      <label className="col-md-3 form-label" style={{ fontWeight: '400', fontSize: "32px" }}>End Date</label>
      <div className="col-md-6">
        <input
          style={{ height: '50px' }}
          type="date"
          className={`form-control rounded ${errors.endDate ? 'is-invalid' : ''}`}
          {...register('endDate', { required: 'Field is required' })}
        />
        <ErrorMessage errors={errors} name="endDate" render={({ message }) => <p className="err-msg" style={{ color: 'red' }}>{message}</p>} />
      </div>
    </div>

    {/* Submit Button */}
    <div className="form-group text-center">
      <button type="submit" className="btn btn-primary btn-lg">Send</button>
    </div>
  </div>
</div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default InterviewDetails;
