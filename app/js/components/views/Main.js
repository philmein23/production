import React, { Component } from 'react';

var styles = {
    background: {
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundImage: "url('app/img/gloomy.jpeg')",
        height: '100%',
        width: '100%'
    },
    container: {
        width: '100%',
        height: '90px',
        background: 'rgb(102, 209, 60)',
        display: 'flex',
        alignItems: 'center',
        padding: 20
    },
    header: {
        fontWeight: '100',
        color: '#FFF',
    },
    logo: {
        height: '70px',
        marginRight: '20px'
    }
}

class Main extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.container}>
            <img style={styles.logo}src="app/img/disaster-logo.png"/>
            <h1 style={styles.header}>Prepared for Disaster</h1>
        </div>
        { this.props.children }
      </div>
    );
  }
};

export default Main;
