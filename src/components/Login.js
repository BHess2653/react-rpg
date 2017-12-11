import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign-In | Sign-Up',
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
        ><Text style={styles.btnTxt}>Sign-In</Text></Button>

        <TextInput style={styles.textInput} placeholder={"E-mail"}/>
        <TextInput style={styles.textInput} placeholder={"Username"}/>
        <TextInput style={styles.textInput} placeholder={"Password"}/>
        <TextInput style={styles.textInput} placeholder={"Confirm Password"}/>
        <Button
          style={[styles.btns, style={backgroundColor: '#007aff'}]}
          onPress={() => navigate('Profile')}
        ><Text style={styles.btnTxt}>Sign-Up</Text></Button>
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
