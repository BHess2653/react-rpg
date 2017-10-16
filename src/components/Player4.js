import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Player4 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
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
