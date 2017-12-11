import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';

export default class Menu extends React.Component {
  static navigationOptions = {
    title: 'Main Menu',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          style={styles.image}
          source={require('../img/icon3.png')}
        />
        <Button
          style={[styles.btns, style={backgroundColor: '#5cb75c'}]}
          onPress={() => navigate('New', { user: 'New Game' })}
        ><Text style={styles.btnTxt}>New Game</Text></Button>
        <Button
          style={[styles.btns, style={backgroundColor: '#007aff'}]}
          onPress={() => navigate('Join', { user: 'Current Games' })}
        ><Text style={styles.btnTxt}>Join Game</Text></Button>
        <Button
          style={[styles.btns, style={backgroundColor: '#007aff'}]}
          onPress={() => navigate('MyGames')}
        ><Text style={styles.btnTxt}>My Games</Text></Button>
        <Button
          style={[styles.btns, style={backgroundColor: '#e83434'}]}
          onPress={() => navigate('Log')}
        ><Text style={[styles.btnTxt,style={fontSize: 20}]}>Logout</Text></Button>
      </View>
    );
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
    paddingTop: 100,
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
