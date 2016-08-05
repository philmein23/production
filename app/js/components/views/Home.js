import React from 'react';
import { Link } from 'react-router';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        height: '150px',
        margin: '5% auto',
        background: '#FFF',
        padding: '20px',
        borderRadius: '10px'
    },
    button: {
        marginTop: '10px',
    }
}

function Home(props) {
    return (
        <div style={styles.container}>
            <button><a href="#/login">EMAIL ME MY PLAN</a></button>
            <Link to="/myPlan">
              <button style={styles.button}>EDIT OR CREATE MY DISASTER PLAN</button>
            </Link>
        </div>

    )
}

export default Home;