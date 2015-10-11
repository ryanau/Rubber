'use strict';

var React = require('react-native');
var Slider = require('react-native-slider');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Dashboard = require('./Dashboard');



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
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

var Login = React.createClass({
  onButtonPressed: function () {
    this.props.navigator.push({
      title: 'Dashboard',
      component: Dashboard,
    });
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Login Page
        </Text>
        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={this.onButtonPressed}>
          <Text style={styles.buttonText}>Log In via Facebook</Text>
        </TouchableHighlight> 
      </View>
    )
  },
});

module.exports = Login;