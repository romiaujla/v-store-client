import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  render() {
    return (
      <section className="landing LoginForm">
        <div className="dark-overlay">
          <div className="landing-inner">
            <form>
              <fieldset>
                <legend>
                  <h3>LOGIN</h3>
                </legend>
                <div className="flex">
                  <label htmlFor="username">
                    <span className="input-title">* Username:</span>
                    <input type="text" id="username" name="username" required />
                  </label>
                  <label htmlFor="password">
                    <span className="input-title">* Password:</span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                  </label>
                  <button className="btn btn-light" type="submit">
                    Login
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
