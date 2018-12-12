import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { buildingsFetch } from '../actions';
import ListItem from './ListItem';

class BuildingList extends Component {
  componentWillMount() {
    this.props.buildingsFetch();
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

  renderRow(building) {
    return <ListItem building={building} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const buildings = _.map(state.buildings, (val, uid) => {
    return { ...val, uid };
  });
  return { buildings };
};

export default connect(
  mapStateToProps,
  { buildingsFetch }
)(BuildingList);
