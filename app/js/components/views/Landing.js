import React from 'react';
import { Link } from 'react-router';

const Landing = React.createClass({
  render: function() {
    return (
      <section className="main-container">
        <button><Link to="/login">LOGIN</Link></button>
        <button><Link to="/register">REGISTER</Link></button>
      </section>
    );
  }
});

export default Landing;
