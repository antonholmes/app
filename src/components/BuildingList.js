import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { buildingsFetch } from '../actions';

class BuildingList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ buildings }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(buildings);
  }

  render() {
    return (
      <View>
        <Text>Building</Text>
        <Text>Building</Text>
        <Text>Building</Text>
        <Text>Building</Text>
        <Text>Building</Text>
        <Text>Building</Text>
      </View>
    );
  }
}

export default connect(
  null,
  { buildingsFetch }
)(BuildingList);
