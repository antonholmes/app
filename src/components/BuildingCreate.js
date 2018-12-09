import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildingUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class BuildingCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="New York City"
            value={this.props.name}
            onChangeText={text =>
              this.props.buildingUpdate({ prop: 'name', value: text })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="123-456-7890"
            value={this.props.phone}
            onChangeText={text =>
              this.props.buildingUpdate({ prop: 'phone', value: text })
            }
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, hours } = state.buildingForm;

  return { name, phone, hours };
};

export default connect(
  mapStateToProps,
  { buildingUpdate }
)(BuildingCreate);
