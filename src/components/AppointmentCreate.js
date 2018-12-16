import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appointmentUpdate, appointmentCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import AppointmentForm from './AppointmentForm';

class AppointmentCreate extends Component {
  onButtonPress() {
    const { name, phone, day } = this.props;

    this.props.appointmentCreate({
      name,
      phone,
      day: day || 'Monday',
    });
  }

  render() {
    return (
      <Card>
        <AppointmentForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, day } = state.appointmentForm;

  return { name, phone, day };
};

export default connect(
  mapStateToProps,
  { appointmentUpdate, appointmentCreate }
)(AppointmentCreate);
