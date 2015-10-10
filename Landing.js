'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var {
  Text,
  View,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});

var Landing = React.createClass({
	// mixins: [ParseReact.Mixin],
	render: function () {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Need a rubber? We got you.
				</Text>
			</View>
		);
	}
});

module.exports = Landing