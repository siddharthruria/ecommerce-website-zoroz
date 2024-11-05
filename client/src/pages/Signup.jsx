import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Signup = () => {
  const { login } = useContext(UserContext);
  //   const { enqueueSnackbar } = useSnackbar();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
    const { name, email, password, address, city, postalCode, country } =
      credentials;
    const response = await fetch("http://localhost:5555/api/user/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        address,
        city,
        postalCode,
        country,
      }),
    });

    const responseData = await response.json();
    if (responseData.success) {
      login(responseData.token);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    <div className="container position-relative">
      <h2 className="my-4 position-absolute start-50 translate-middle">
        signup
      </h2>
      <form className="py-5 my-4" onSubmit={handleSubmitFunction}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            city
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            postal code
          </label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            onChange={onChange}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary my-3">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
