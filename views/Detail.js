import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  };
  render() {
    const { navigate } = this.props.navigation;
    const word = this.props.navigation.state.params.word;

    return (
      <View>
        <Text style={{ fontSize: 20 }}>{word.word}, {word.wordType}</Text>
        <Text>{word.meaning}</Text>
      </View>
    );
  }
}
