import React from "react";
import * as Validator from "validatorjs";

class FormRegistrasi extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    errors: "",
  };

  handleOnChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  validation = (username, email, password) => {
    const data = {
      username,
      email,
      password,
    };

    const rules = {
      username: "required|min:5",
      email: "required|email",
      password: "required|min:8",
    };

    const validation = new Validator(data, rules);

    if (validation.passes()) {
      const { username, email, password } = this.state;
      alert(`Username : ${username}\nEmail : ${email}\nPassword : ${password}`);
      this.setState({
        username: "",
        email: "",
        password: "",
        errors: "",
      });
    } else {
      this.setState({
        errors: validation.errors.all(),
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.validation(username, email, password);
  };

  showError = (name) => {
    const { errors } = this.state;
    if (errors[name] !== undefined) {
      const message = errors[name].map((error, i) => (
        <p key={i} className='my-0 text-danger'>
          {error}
        </p>
      ));
      return message;
    }
  };
  render() {
    return (
      <div className='hstack container vh-100 justify-content-center'>
        <div className='w-50'>
          <div className='shadow p-4'>
            <h2 className='fw-bold text-center mb-4'>Registrasi</h2>

            <form onSubmit={this.handleSubmit}>
              <label htmlFor='username' className='text-secondary mb-1'>
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={this.state.username}
                onChange={this.handleOnChange}
                className='form-control'
              />
              {this.state.errors && this.showError("username")}

              <label htmlFor='email' className='text-secondary mb-1 mt-3'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={this.state.email}
                onChange={this.handleOnChange}
                className='form-control'
              />
              {this.state.errors && this.showError("email")}

              <label htmlFor='password' className='text-secondary mb-1 mt-3'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={this.state.password}
                onChange={this.handleOnChange}
                className='form-control'
                ref={this.password}
              />
              {this.state.errors && this.showError("password")}

              <button className='btn btn-success mt-3'>Registrasi</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default FormRegistrasi;
