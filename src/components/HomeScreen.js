import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
        <Button
          onPress={() => navigate('Add', { user: 'Create a User' })}
          title="Add User"
        />
        <Text style={styles.text}>Inspect Players</Text>
        <Button
          onPress={() => navigate('P1', { user: 'theclaw124' })}
          title="theclaw124"
        />
        <Button
          onPress={() => navigate('P2', { user: 'Magtheridon125' })}
          title="Magtheridon125"
        />
        <Button
          onPress={() => navigate('P3', { user: 'Sonic2653' })}
          title="Sonic2653"
        />
        <Button
          onPress={() => navigate('P4', { user: 'ParagonApple' })}
          title="ParagonApple"
        />
      </View>
    );
  }
}
