import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import AppointmentForm from './AppointmentForm';
import {
  appointmentUpdate,
  appointmentSave,
  appointmentDelete,
} from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class AppointmentEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.appointment, (value, prop) => {
      this.props.appointmentUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, borough } = this.props;

    this.props.appointmentSave({
      name,
      phone,
      borough,
      uid: this.props.appointment.uid,
    });
  }

  onTextPress() {
    const { name, phone, day } = this.props;

    Communications.text(
      phone,
      `You have an appointment with ${name} scheduled on ${day}.`
    );
  }

  onAccept() {
    const { uid } = this.props.appointment;

    this.props.appointmentDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <AppointmentForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Appointment
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Cancel Appointment
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to cancel this appointment?
        </Confirm>
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
  { appointmentUpdate, appointmentSave, appointmentDelete }
)(AppointmentEdit);
