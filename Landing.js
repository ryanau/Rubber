'use strict';

var React = require('react-native');
var Slider = require('react-native-slider');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Dashboard = require('./Dashboard');
var Login = require('./Login');

var {
  View,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
  	marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

var Landing = React.createClass({
	getInitialState: function () {
		return {
			loginedIn: true,
		}
	},
	render: function () {
		if (this.state.loginedIn) {
			var view = (
				<Dashboard navigator={this.props.navigator}/>
			)
		} else {
			var view = (
				<Login navigator={this.props.navigator}/>
			)
		}
		return (
			<View style={styles.container}>
				{view}
			</View>
		)
	},
});

module.exports = Landing;

