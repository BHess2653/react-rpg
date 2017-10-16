import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

class AddScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Edit" />,
    title: `${navigation.state.params.user}`,
  });
  render() {
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
