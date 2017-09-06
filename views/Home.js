import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { words } from '../db';
import _ from 'lodash';

export default class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Koe', headerTintColor: 'blue' };

  renderWords = words => {
    const { navigate } = this.props.navigation;
    return _.map(words, (word, i) => {
      return (
        <TouchableOpacity
          onPress={() => navigate('Detail', { word: word })}
          key={i}
          style={{ padding: 10, backgroundColor: 'yellow' }}>
          <Text>{word.word[0]}</Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput style={{ borderColor: 'blue', borderWidth: 1, height: 35, margin: 15 }} />
        {this.renderWords(words)}
      </View>
    );
  }
}
