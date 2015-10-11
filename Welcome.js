'use strict';

var React = require('react-native');
var Slider = require('react-native-slider');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
  	marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  Push: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    },
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

});

var Login = React.createClass({
  onLogInPressed: function () {
    this.props.navigator.push({
      title: 'Logging In',
      component: Login,
    });
  },
  onSignUpPressed: function () {
    this.props.navigator.push({
      title: 'Sign Up',
      component: Signup,
    });
  },

  render: function () {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Welcome to Rubber
        </Text>

        <TouchableHighlight style={styles.loginButton}
            underlayColor='#99d9f4'
            onPress={this.onLogInPressed}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight> 

        <TouchableHighlight style={styles.signupButton}
            underlayColor='#99d9f4'
            onPress={this.onSignUpPressed}>
          <Text style={styles.buttonText}>Sign Up Now</Text>
        </TouchableHighlight> 

      </View>
    )
  },
});

module.exports = Login;