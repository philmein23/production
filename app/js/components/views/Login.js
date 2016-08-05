import React from 'react';

const Login = React.createClass({
  render: function() {
    return (
      <form>
        <label>EMAIL</label>
        <input type="text" name="email"></input>
        <label>PASSWORD</label>
        <input type="password" name="password"></input>
        <button>LOGIN</button>
      </form>
    );
  }
});

export default Login;
