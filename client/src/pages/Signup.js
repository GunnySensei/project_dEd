import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    birthday: "",
    sex: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="signup-card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit} className="signup-form">
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <br></br>
              <hr />

              <h5>Sex at Birth</h5>
              <div className="flex-row">
                <label htmlFor="Male" className="form-header">
                  Male
                </label>
                <input
                  className="form-input-radio"
                  name="sex"
                  type="radio"
                  id="sex"
                  value="Male"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row">
                <label htmlFor="Female" className="form-header">
                  Female
                </label>
                <input
                  className="form-input-radio"
                  name="sex"
                  type="radio"
                  id="sex"
                  value="Female"
                  onChange={handleChange}
                />
              </div>
              <hr />
              <h5>Date of Birth</h5>
              <input
                className="form-input"
                name="birthday"
                type="date"
                id="birthday"
                value={formState.birthday}
                onChange={handleChange}
              />
              <br></br>
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
