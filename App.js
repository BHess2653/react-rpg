import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'GameMaster',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          style={styles.image}
          source={require('./src/img/icon3.png')}
        />
        <Text style={[styles.text, styles.title]}>Options:</Text>
        <Button
          style={[styles.btns, style={backgroundColor: '#5cb75c'}]}
          onPress={() => navigate('New', { user: 'New Game' })}
        ><Text style={styles.btnTxt}>New Game</Text></Button>
        <Button
          style={[styles.btns, style={backgroundColor: '#f1ad4f'}]}
          onPress={() => navigate('Old', { user: 'Current Games' })}
        ><Text style={styles.btnTxt}>Created Games</Text></Button>
        <View style={styles.views}>
          <Text style={[styles.text, styles.title]}>Profile Info:</Text>
          <Text style={styles.text}>Games Finished: 5</Text>
          <Text style={styles.text}>Characters: 2</Text>
          <Text style={styles.text}>Characters Killed: 1</Text>
          <Text style={styles.text}>Characters Finished: 1</Text>
        </View>
        <Button
          style={[styles.btns]}
          onPress={() => navigate('Log')}
        ><Text style={style={fontSize: 20}}>Logout</Text></Button>
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
          style={[styles.btns]}
          onPress={() => navigate('P1', { user: 'theclaw124' })}
          title="theclaw124"
        />
      </View>
    );
  }
}

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.currentGames}>
        <TextInput style={styles.textInput} placeholder={"Username"}/>
        <TextInput style={styles.textInput} placeholder={"Password"}/>
        <Button
          style={[styles.btns, style={backgroundColor: '#007aff'}]}
          onPress={() => navigate('Profile')}
        ><Text style={styles.btnTxt}>Login</Text></Button>
      </View>
    );
  }
}


class NewGame extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Game',
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.currentGames}>
        <TextInput style={styles.textInput} placeholder={"Campaign Name?"}/>
        <TextInput style={styles.textInput} placeholder={"Terrain Type?"}/>
        <TextInput style={styles.textInput} placeholder={"Starting Location?"}/>
        <TextInput style={styles.textInput} placeholder={"Starting Enemies?"}/>
        <TextInput style={styles.textInput} placeholder={"How Many Players?"}/>
        <Button
          style={[styles.btns, style={backgroundColor: '#007aff'}]}
          onPress={() => navigate('Players', { user: 'New Game' })}
        ><Text style={styles.btnTxt}>Create Game</Text></Button>
      </View>
    );
  }
}

class Players extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Players',
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.currentGames}>
        <Button
          style={[styles.btns, style={backgroundColor: '#007aff'}]}
          onPress={() => navigate('Profile')}>
          <Text style={styles.btnTxt}>Add Players</Text>
        </Button>
        <Text style={styles.text}>Send this code to your friends</Text>
        <Text style={styles.text}>Code: cQ4Bx8</Text>
        <Button
          style={[styles.btns, style={backgroundColor: '#5cb75c'}]}
          onPress={() => navigate('Profile')}
        ><Text style={styles.btnTxt}>Done</Text></Button>
      </View>
    );
  }
}

class NewGameold extends React.Component {
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
      <View style={styles.currentGames}>
        <TextInput style={styles.textInput} placeholder={"Game Name?"}/>
        <TextInput style={styles.textInput} placeholder={"How Many Players?"}/>
        <TextInput style={styles.textInput} placeholder={"Starting Location?"}/>
        <TextInput style={styles.textInput} placeholder={"Starting Quest?"}/>
        <Button style={[styles.btns]} ><Text style={style={fontSize: 20}}>Create Game</Text></Button>
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Log: { screen: Login },
  Profile: { screen: ProfileScreen },
  New: { screen: NewGame },
  Old: { screen: OldGame },
  Players: { screen: Players },
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
  currentGames: {
    paddingTop: 200,
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
    width: 350,
    height: 50,
    marginTop: 5,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: '#bfbfbf',
  },
  title: {
    color: 'green',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 130,
    resizeMode: 'contain',
  },
  views: {
    marginTop: 20,
  },
  btns: {
    width: 350,
    height: 50,
    marginTop: 5,
    marginLeft: 30,
    backgroundColor: 'lightgrey',
    borderColor: 'rgba(241, 173, 79, 0)',
  },
  btnTxt: {
    color: 'white',
    fontSize: 20,
  },
});
