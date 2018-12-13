import React, { Component } from 'react';
import { connect } from 'react-redux'
import BuildingForm from './BuildingForm'
import { Card, CardSection, Button } from './common';

class BuildingEdit extends Component {
  render() {
    return (
      <BuildingForm />
      <Card>
        <CardSection>
          <Button>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(BuildingEdit);
