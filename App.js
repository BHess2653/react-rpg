import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';
import Login from './src/components/Login';
import Menu from './src/components/Menu';
import NewGame from './src/components/NewGame';
import Players from './src/components/Players';
import JoinGame from './src/components/JoinGame';
import Joined from './src/components/Joined';
import MyGames from './src/components/MyGames';
import GameName from './src/components/GameName';
import Character from './src/components/Character';
import PlayerView from './src/components/PlayerView';
import * as firebase from 'firebase';

export const SimpleApp = StackNavigator({
  Log: { screen: Login },
  Menu: { screen: Menu },
  New: { screen: NewGame },
  Join: { screen: JoinGame },
  Joined: { screen: Joined },
  Players: { screen: Players },
  MyGames: { screen: MyGames },
  GameName: { screen: GameName },
  Character: { screen: Character },
  PlayerView: { screen: PlayerView },
});

export default class App extends React.Component {
  componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyCwhwQBvZsscmU8Tcee6kTK557Mn5MO9nk',
          authDomain: 'react-rpg-61b84.firebaseapp.com',
          databaseURL: 'https://react-rpg-61b84.firebaseio.com',
          storageBucket: 'react-rpg-61b84.appspot.com'
      });
  }
  render() {
    return <SimpleApp />;
  }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
