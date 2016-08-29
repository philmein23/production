import React from 'react';
import BaseKit from './BaseKit';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFF',
    width: '60%',
    maxWidth: '500px',
    height: 'auto',
    padding: '20px',
    borderRadius: '10px',
    margin: '5% auto'
  },
  form: {
    background: '#FFF',
    width: '60%',
    margin: '5% auto',
    padding: '20px',
    display: 'flex',
    alignItems: 'center'
  }
}

function MyPlan({handleInputChange}) {
      return (
        <section>
          <form style={styles.container}>
            <h2>Personal Information</h2>
            <label>FIRST NAME</label>
            <input type="text" name="firstName" placeholder="First Name"
            onChange={handleInputChange}/>
            <label>LAST NAME</label>
            <input type="text" name="lastName" placeholder="Last Name"
            onChange={handleInputChange}/>
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="Email"
            onChange={handleInputChange}/>
            <label>PRIMARY PHONE</label>
            <input type="text" name="primaryPhone" autoComplete="tel"
            onChange={handleInputChange}/>
            <h2>Address</h2>
            <label>ADDRESS LINE 1</label>
            <input type="text" name="streetAddress" autoComplete="address-line1"
            onChange={handleInputChange}/>
            <label>ADDRESS LINE 2</label>
            <input type="text" name="streetAddressPt2" autoComplete="address-line2"
            onChange={handleInputChange}/>
            <label>CITY</label>
            <input type="text" name="city" autoComplete="address-level2"
            onChange={handleInputChange}/>
            <label>STATE</label>
            <input type="text" name="state" autoComplete="address-level1"
            onChange={handleInputChange}/>
            <label>POSTAL CODE</label>
            <input type="text" name="postalCode" autoComplete="postal-code"
            onChange={handleInputChange}/>
            <button className="rally" id="user-rally">ADD WORK/SCHOOL RALLY POINT</button>
            <button type="submit" id="user-info-sub">SUBMIT THIS SECTION</button>
            <button className="household-member">CREATE HOUSEHOLD MEMBER</button>
            <button className="rally" id="plan-rally">SET RALLY POINTS</button>
            <BaseKit />
          </form>
      </section>
    )
}

export default MyPlan;
