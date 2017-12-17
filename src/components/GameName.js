import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { Button, FormLabel, FormInput } from "react-native-elements";
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class GameName extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Game Name',
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.currentGames}>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#5cb75c'
          title="Waiting..."
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#5cb75c'
          title="Waiting..."
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#5cb75c'
          title="Waiting..."
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#5cb75c'
          title="Waiting..."
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#007aff'
          title="Home"
          onPress={() => navigate('Menu')}
        />
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
    // fontFamily: 'Avenir',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 25,
    width: 350,
    height: 50,
    paddingTop: 10,
    paddingLeft: 5,
    marginTop: 5,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: '#bfbfbf',
  },
  textInput: {
    // fontFamily: 'Avenir',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 25,
    width: 350,
    height: 50,
    marginTop: 5,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: '#bfbfbf',
    backgroundColor: '#fff',
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
