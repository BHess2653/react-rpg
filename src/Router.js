import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry, Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from "react-native-vector-icons";
import Button from 'apsl-react-native-button';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Menu from './components/Menu';
import NewGame from './components/NewGame';
import Players from './components/Players';
import JoinGame from './components/JoinGame';
import Joined from './components/Joined';
import MyGames from './components/MyGames';
import GameName from './components/GameName';
import Character from './components/Character';
import PlayerView from './components/PlayerView';

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign-Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign-In"
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const SimpleApp = StackNavigator({
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

AppRegistry.registerComponent('SignedOut', () => SignedOut);
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
