import React from 'react';

const Register = React.createClass({
  render: function() {
    return (
      <form>
        <label>FIRST NAME</label>
        <input type="text" name="firstName"></input>
        <label>LAST NAME</label>
        <input type="text" name="lastName"></input>
        <label>EMAIL</label>
        <input type="email" name="email"></input>
        <label>CONFIRM EMAIL</label>
        <input type="email" name="confirmEmail"></input>
        <label>PASSWORD</label>
        <input type="password" name="password"></input>
        <label>CONFIRM PASSWORD</label>
        <input type="password" name="confirmPassword"></input>
        <button>REGISTER</button>
      </form>
    );
  }
});

export default Register;
