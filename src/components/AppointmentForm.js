import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { appointmentUpdate } from '../actions';
import { CardSection, Input } from './common';

class AppointmentForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Asset User"
            value={this.props.name}
            onChangeText={value =>
              this.props.appointmentUpdate({ prop: 'name', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="123-456-7890"
            value={this.props.phone}
            onChangeText={value =>
              this.props.appointmentUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Day</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.day}
            onValueChange={value =>
              this.props.appointmentUpdate({ prop: 'day', value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
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
  const { name, phone, day, time } = state.appointmentForm;
  return { name, phone, day, time };
};

export default connect(
  mapStateToProps,
  { appointmentUpdate }
)(AppointmentForm);
