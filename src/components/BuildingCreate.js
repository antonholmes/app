import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildingUpdate, buildingCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import BuildingForm from './BuildingForm';

class BuildingCreate extends Component {
  onButtonPress() {
    const { name, phone, borough } = this.props;

    this.props.buildingCreate({
      name,
      phone,
      borough: borough || 'Manhattan',
    });
  }

  render() {
    return (
      <Card>
        <BuildingForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, borough } = state.buildingForm;
g
  return { name, phone, borough };
};

export default connect(
  mapStateToProps,
  { buildingUpdate, buildingCreate }
)(BuildingCreate);
