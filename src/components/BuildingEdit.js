import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import BuildingForm from './BuildingForm';
import { buildingUpdate, buildingSave, buildingDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class BuildingEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.building, (value, prop) => {
      this.props.buildingUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, borough } = this.props;

    this.props.buildingSave({
      name,
      phone,
      borough,
      uid: this.props.building.uid,
    });
  }

  onTextPress() {
    const { phone, borough } = this.props;

    Communications.text(
      phone,
      `Your appointment in ${borough} will be scheduled.`
    );
  }

  onAccept() {
    const { uid } = this.props.building;

    this.props.buildingDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <BuildingForm />

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
  const { name, phone, borough } = state.buildingForm;

  return { name, phone, borough };
};

export default connect(
  mapStateToProps,
  { buildingUpdate, buildingSave, buildingDelete }
)(BuildingEdit);
