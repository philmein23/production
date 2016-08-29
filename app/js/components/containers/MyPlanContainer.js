import React, { Component, PropTypes } from 'react';
import MyPlan from '../views/MyPlan';

class MyPlanContainer extends Component {
  constructor() {
    super();
    this.state = {
      fields: {}
    }
  }
  onInputChange(e) {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return <MyPlan handleInputChange={(e) => this.onInputChange(e)}/>
  }
};

export default MyPlanContainer;

