import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  sub = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: this.state.count = 0,
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.countContainer]}>
          <Text style={styles.countText}>{this.state.count}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.add}>
          <Text style={styles.text}> Add </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.sub}>
          <Text style={styles.text}> sub </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text style={styles.text}> reset </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#1017EF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2F03A9',
    padding: 10,
    marginVertical: 10,
    borderRadius: 40,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FFFFFF',
    fontSize: 100,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20
  }
});
