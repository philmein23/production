import React, { Component, PropTypes } from 'react';
import BaseKit from '../views/BaseKit';
import { Field, Fieldset, createValue } from 'react-forms';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFF',
    width: '400px',
    maxWidth: '500px',
    height: 'auto',
    padding: '20px',
    borderRadius: '10px',
    margin: '5% auto'
  }
}

class MyPlanContainer extends Component {
  constructor(props) {
    super(props)
    let formValue = createValue({
      value: props.value,
      onChange: this.onChange.bind(this)
    })
    this.state = {
      formValue
    }
  }
  onChange(formValue) {
    this.setState({formValue});
  }
  handleSubmit() {
    this.context.router.push({
      pathname: '/',
      state: {formValue}
    })
  }
  render() {
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <Fieldset style={styles.container} formValue={this.state.formValue}>
          <Field select="firstName" label="First name" />
          <Field select="lastName" label="Last name" />
          <Field select="Email Address" label="Email Address" />
          <Field select="Primary Phone" label="Primary Phone" />
          <Field select="Address Line 1" label="Address Line 1" />
          <Field select="Address Line 2" label="Address Line 2" />
          <Field select="City" label="City" />
          <Field select="State" label="State" />
          <Field select="Postal Code" label="Postal Code" />
          <button type="submit">Submit</button>
        </Fieldset>
      </form>
      )
  }
};

MyPlanContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MyPlanContainer;

/*const MyPlan = React.createClass({

  render: function() {
    return (
      <section>
        <form ref="planForm" onSubmit={this.createPlan}>
          <h2>Personal Information</h2>
          <label>FIRST NAME</label>
          <input type="text" name="firstName" placeholder="First Name"></input>
          <label>LAST NAME</label>
          <input type="text" name="lastName" placeholder="Last Name"></input>
          <label>EMAIL</label>
          <input type="email" name="email" placeholder="Email"></input>
          <label>PRIMARY PHONE</label>
          <input type="text" name="primaryPhone" autoComplete="tel"></input>
          <h2>Address</h2>
          <label>ADDRESS LINE 1</label>
          <input type="text" name="streetAddress" autoComplete="address-line1"></input>
          <label>ADDRESS LINE 2</label>
          <input type="text" name="streetAddressPt2" autoComplete="address-line2"></input>
          <label>CITY</label>
          <input type="text" name="city" autoComplete="address-level2"></input>
          <label>STATE</label>
          <input type="text" name="state" autoComplete="address-level1"></input>
          <label>POSTAL CODE</label>
          <input type="text" name="postalCode" autoComplete="postal-code"></input>
          <button className="rally" id="user-rally">ADD WORK/SCHOOL RALLY POINT</button>
          <button type="submit" id="user-info-sub">SUBMIT THIS SECTION</button>
          <button className="household-member">CREATE HOUSEHOLD MEMBER</button>
          <button className="rally" id="plan-rally">SET RALLY POINTS</button>
          <BaseKit />
        </form>
      </section>
    );
  }
});*/


