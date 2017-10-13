import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight: <Button title="GameMaster" />,
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Add', { user: 'Create User' })}
          title="Add User"
        />
        <Text style={styles.text}>Inspect Players</Text>
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

class AddScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <TextInput style={styles.text} placeholder={"Enter a Username"}/>
        <TextInput style={styles.text} placeholder={"Enter a Race"}/>
        <TextInput style={styles.text} placeholder={"Enter a Class"}/>
        <Button
          title="Add"
        />
      </View>
    );
  }
}

class Player1 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
      <Text style={styles.text}>Stats:</Text>
        <Text style={styles.text}>HP: 100/100</Text>
        <Text style={styles.text}>XP: 1250/2000</Text>
        <Text style={styles.text}>$: 100g 25s 10c</Text>
        <Text style={styles.text}>Inventory:</Text>
        <Text style={styles.text}>Staff of Healing</Text>
        <Text style={styles.text}>Ring of Power</Text>
        <Text style={styles.text}>Healing Potion x25</Text>
        <Text style={styles.text}>Mana Potion x25</Text>
      </View>
    );
  }
}

class Player2 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
      <Text style={styles.text}>Stats:</Text>
        <Text style={styles.text}>HP: 100/100</Text>
        <Text style={styles.text}>XP: 1250/2000</Text>
        <Text style={styles.text}>$: 50g 45s 60c</Text>
        <Text style={styles.text}>Inventory:</Text>
        <Text style={styles.text}>Magic Bow</Text>
        <Text style={styles.text}>Ring of Luck</Text>
        <Text style={styles.text}>Healing Potion x25</Text>
        <Text style={styles.text}>Mana Potion x25</Text>
      </View>
    );
  }
}

class Player3 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
      <Text style={styles.text}>Stats:</Text>
        <Text style={styles.text}>HP: 100/100</Text>
        <Text style={styles.text}>XP: 1250/2000</Text>
        <Text style={styles.text}>$: 12g 82s 50c</Text>
        <Text style={styles.text}>Inventory:</Text>
        <Text style={styles.text}>Dragon Sword</Text>
        <Text style={styles.text}>Ring of Light</Text>
        <Text style={styles.text}>Healing Potion x25</Text>
        <Text style={styles.text}>Mana Potion x25</Text>
      </View>
    );
  }
}

class Player4 extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
      <Text style={styles.text}>Stats:</Text>
        <Text style={styles.text}>HP: 100/100</Text>
        <Text style={styles.text}>XP: 1250/2000</Text>
        <Text style={styles.text}>$: 5g 34s 11c</Text>
        <Text style={styles.text}>Inventory:</Text>
        <Text style={styles.text}>Fire Dagger</Text>
        <Text style={styles.text}>Ring of Will</Text>
        <Text style={styles.text}>Healing Potion x25</Text>
        <Text style={styles.text}>Mana Potion x25</Text>
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Add: { screen: AddScreen },
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
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 25,
  }
});
