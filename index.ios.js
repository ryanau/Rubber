'use strict';

// require('dotenv').load();

var React = require('react-native');
var Landing = require('./Landing');
var Parse = require('parse').Parse;
var {
  AppRegistry,
  StyleSheet,
} = React;

// Parse.initialize(
//   process.env.PARSE_ID,
//   process.env.PARSE_SECRET,
// );

Parse.initialize(
  "r9aJqU0PByTPhz3kFPCS7d4ZmZyH07nsbMOnqkUf",
  "lvA5gbQM5WPB0rfWTtxJJuA8BM7KgZRYKb08zuA3",
);

var RubberApp = React.createClass({
  render: function() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Rubber',
          component: Landing,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('Rubber', () => RubberApp);