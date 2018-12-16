import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white ' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <Card>
        <Text style={styles.textStyle}>Login to your account</Text>
        <Text />
        <CardSection>
          <Input
            label="Email/Username"
            placeholder="Enter Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <Text />
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Enter Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
