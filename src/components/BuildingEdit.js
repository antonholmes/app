import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuildingForm from './BuildingForm';
import { buildingUpdate, buildingSave } from '../actions';
import { Card, CardSection, Button } from './common';

class BuildingEdit extends Component {
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

  render() {
    return (
      <Card>
        <BuildingForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
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
  { buildingUpdate, buildingSave }
)(BuildingEdit);
