import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerRight: <Button title="Logout" />,
    title: 'GameMaster',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          style={styles.image}
          source={require('./src/img/icon.png')}
        />
        <Text style={[styles.text, styles.title]}>Options:</Text>
        <Button
          onPress={() => navigate('New', { user: 'New Game' })}
          title="New Games"
        />
        <Button
          onPress={() => navigate('Old', { user: 'Current Games' })}
          title="Current Games"
        />
        <View style={styles.views}>
          <Text style={[styles.text, styles.title]}>Profile Info:</Text>
          <Text style={styles.text}>Games Finished: 5</Text>
          <Text style={styles.text}>Characters: 2</Text>
          <Text style={styles.text}>Characters Killed: 1</Text>
          <Text style={styles.text}>Characters Finished: 1</Text>
        </View>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <Button title="GameMaster" />,
    headerRight: <Button title="Logout" />,
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.text}>Inspect Players</Text>
        <Button
          onPress={() => navigate('P1', { user: 'theclaw124' })}
          title="theclaw124"
        />
      </View>
    );
  }
}

class NewGame extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Button
          onPress={() => navigate('#', { user: 'New Game' })}
          title="Start Game"
        />
        <Button
          onPress={() => navigate('#', { user: 'Current Games' })}
          title="Join Game"
        />
      </View>
    );
  }
}

class OldGame extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <TextInput style={styles.textInput} placeholder={"Game Name?"}/>
        <TextInput style={styles.textInput} placeholder={"How Many Players?"}/>
        <TextInput style={styles.textInput} placeholder={"Starting Location?"}/>
        <Button
          title="Create Game"
        />
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Profile: { screen: ProfileScreen },
  New: { screen: NewGame },
  Old: { screen: OldGame },
  Home: { screen: HomeScreen },
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
  },
  textInput: {
    fontFamily: 'Avenir',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 25,
    height: 40,
  },
  title: {
    color: 'green',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 130,
    resizeMode: 'contain',
  },
  views: {
    marginTop: 20,
  }
});
