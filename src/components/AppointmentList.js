import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { appointmentsFetch } from '../actions';
import ListItem from './ListItem';
import Footer from './common/Footer'

class AppointmentList extends Component {
  componentWillMount() {
    this.props.appointmentsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ appointments }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(appointments);
  }

  renderRow(appointment) {
    return <ListItem appointment={appointment} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      <Footer />
    );
  }
}

const mapStateToProps = state => {
  const appointments = _.map(state.appointments, (val, uid) => {
    return { ...val, uid };
  });
  return { appointments };
};

export default connect(
  mapStateToProps,
  { appointmentsFetch }
)(AppointmentList);
