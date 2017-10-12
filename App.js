import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Inspect Players</Text>
        <Button
          onPress={() => navigate('P1', { user: 'theclaw124' })}
          title="theclaw124"
        />
        <Button
          onPress={() => navigate('P2', { user: 'Magtheridon125' })}
          title="Magtheridon125"
        />
        <Button
          onPress={() => navigate('P3', { user: 'Sonic2653' })}
          title="Sonic2653"
        />
        <Button
          onPress={() => navigate('P4', { user: 'ParagonApple' })}
          title="ParagonApple"
        />
      </View>
    );
  }
}

class Player1 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Inspecting {params.user}</Text>
      </View>
    );
  }
}

class Player2 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Inspecting {params.user}</Text>
      </View>
    );
  }
}

class Player3 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Inspecting {params.user}</Text>
      </View>
    );
  }
}

class Player4 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Inspecting {params.user}</Text>
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  P1: { screen: Player1 },
  P2: { screen: Player2 },
  P3: { screen: Player3 },
  P4: { screen: Player4 },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
