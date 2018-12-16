import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import BuildingDetail from './BuildingDetail';

class Home extends Component {
  state = { buildings: [] };

  componentWillMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/antonholmes/bldgnyc/master/api/building_list'
      )
      .then(response => this.setState({ buildings: response.data }));
  }

  renderBuildings() {
    return this.state.buildings.map(building => (
      <BuildingDetail key={building.name} building={building} />
    ));
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderBuildings()}</ScrollView>;
  }
}

export default Home;
