import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { buildingUpdate, buildingCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

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
        <CardSection>
          <Input
            label="Name"
            placeholder="New York City"
            value={this.props.name}
            onChangeText={value =>
              this.props.buildingUpdate({ prop: 'name', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="123-456-7890"
            value={this.props.phone}
            onChangeText={value =>
              this.props.buildingUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Boroughs</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.borough}
            onValueChange={value =>
              this.props.buildingUpdate({ prop: 'borough', value })
            }
          >
            <Picker.Item label="Manhattan" value="Manhattan" />
            <Picker.Item label="Brooklyn" value="Brooklyn" />
            <Picker.Item label="Bronx" value="Bronx" />
            <Picker.Item label="Queens" value="Queens" />
            <Picker.Item label="Staten Island" value="Staten Island" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};
const mapStateToProps = state => {
  const { name, phone, borough } = state.buildingForm;

  return { name, phone, borough };
};

export default connect(
  mapStateToProps,
  { buildingUpdate, buildingCreate }
)(BuildingCreate);
