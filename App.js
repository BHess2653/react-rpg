import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';
import { SignedOut, SimpleApp } from './src/Router';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCwhwQBvZsscmU8Tcee6kTK557Mn5MO9nk",
    authDomain: "react-rpg-61b84.firebaseapp.com",
    databaseURL: "https://react-rpg-61b84.firebaseio.com",
    storageBucket: "react-rpg-61b84.appspot.com"
});

export default class App extends React.Component {
  render() {
    return <SignedOut />;
    return <SimpleApp />;
  }
}

AppRegistry.registerComponent('SignedOut', () => SignedOut);
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
