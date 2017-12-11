import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';

export default class PlayerView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dahakas Inventory',
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.currentGames}>
        <Text style={[styles.text, styles.title]}>Equipment:</Text>
        <View>
          <Text style={[styles.text]}>Basic Robes</Text>
          <Text style={[styles.text]}>Basic Armor</Text>
          <Text style={[styles.text]}>Basic Staff</Text>
        </View>
        
        <Text style={[styles.text, styles.title]}>Inventory:</Text>
        <View>
          <Text style={[styles.text]}>23 Mana Potions</Text>
          <Text style={[styles.text]}>23 Health Potions</Text>
          <Text style={[styles.text]}>Basic Sword</Text>
          <Text style={[styles.text]}>Basic Shield</Text>
        </View>
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
    textAlign: 'left',
    fontSize: 25,
    width: 350,
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
