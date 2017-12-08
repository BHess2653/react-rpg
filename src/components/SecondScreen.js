import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'GameMaster',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Text >Options:</Text>
        <Button

          onPress={() => navigate('New', { user: 'New Game' })}
        ><Text >New Game</Text></Button>
        <Button

          onPress={() => navigate('Old', { user: 'Current Games' })}
        ><Text >Created Games</Text></Button>
        <View >
          <Text >Profile Info:</Text>
          <Text >Games Finished: 5</Text>
          <Text >Characters: 2</Text>
          <Text >Characters Killed: 1</Text>
          <Text >Characters Finished: 1</Text>
        </View>
        <Button

          onPress={() => navigate('Log')}
        ><Text style={style={fontSize: 20}}>Logout</Text></Button>
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
