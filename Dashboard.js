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
  ActivityIndicatorIOS,
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
  spinner: {
  	alignSelf: 'center',
  }
});

var Dashboard = React.createClass({
	// mixins: [ParseReact.Mixin],
	getInitialState: function () {
		return {
			price: 1,
			loading: false,
		}
	},
	handleSliderChange: function (value) {
		this.setState({
			price: Math.floor(value),
		})
	},
	onButtonPressed: function () {
		this.setState({
			loading: true,
		})
	},
	render: function () {
		if (!this.state.loading) {
			var button = (
			<TouchableHighlight style={styles.button}
			    underlayColor='#99d9f4'
			    onPress={this.onButtonPressed}>
			  <Text style={styles.buttonText}>Go</Text>
			</TouchableHighlight> );
			var slider = (
			<Slider
				value={this.state.price}
				onValueChange={this.handleSliderChange}
				minimumValue={1}
				maximumValue={40}/>
			)
		} else {
			var spinner = 
			( <ActivityIndicatorIOS
			    hidden='true'
			    size='large'/> )
		}
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Need a rubber? We got you.
				</Text>
				{slider}
				<Text style={styles.description}>
					Willing to pay ${this.state.price} for safe sex
				</Text>
					{button}
				<View style={styles.spinner}>
					{spinner}
				</View>
			</View>
		);
	}
});

module.exports = Dashboard;