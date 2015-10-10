'use strict';

var React = require('react-native');
var Slider = require('react-native-slider');
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
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

var Landing = React.createClass({
	// mixins: [ParseReact.Mixin],
	getInitialState: function () {
		return {
			price: 1,
		}
	},
	handleSliderChange: function (value) {
		this.setState({
			price: Math.floor(value),
		})
	},
	render: function () {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Need a rubber? We got you.
				</Text>
				<Slider
					value={this.state.price}
					onValueChange={this.handleSliderChange}
					minimumValue={1}
					maximumValue={40}/>
				<Text style={styles.description}>
					Willing to pay ${this.state.price} for safe sex
				</Text>
			</View>
		);
	}
});

module.exports = Landing