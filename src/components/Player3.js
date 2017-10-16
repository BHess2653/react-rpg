import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Player3 extends React.Component {
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
