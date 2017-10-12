
import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, scrollView, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./header_logo.png')} style={styles.logo}/>
          <Text style={styles.headerText}>Logout</Text>
          <Text style={styles.headerText}>Username</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={[styles.flex1, styles.inputs]}>
            <View style={styles.inputcontainer}>
              <TextInput style={styles.textinput} placeholder={"Enter a code"}/>
              <Button
                title="Join"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
          <View style={[styles.flex1, styles.inputs]}>
            <View style={styles.btncontainer}>
              <Button
                title="Create Game"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
          <View style={[styles.flex1, styles.inputs]}>
            <View style={styles.btncontainer}>
              <Text style={styles.OtherText}>My Games</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5aca0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#000',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 15,
    backgroundColor: 'rgb(128,128,128)',
    alignSelf: 'stretch',
  },
  list: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  listitem: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    marginBottom: 1,
    height: 75,
    width: 50,
  },
  listitemtext: {
    // textAlign: 'center'
  },
  headerText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: '900',
    fontSize: 25
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  flex1: {
    flex: 1
  },
  bottomNav: {
    flex: 1
  },
  textinput: {
    backgroundColor: 'white',
    height: 40,
    borderWidth: 2,
    borderColor: 'rgb(200,200,200)',
    borderStyle: 'solid',
    width: 80,
    flex: 2,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labeltext: {
    flex: 1,
  },
  inputcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 1,
    height: 75,
    width: 50,
    backgroundColor: 'white',
    borderWidth: 3,
  },
  btncontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 1,
    height: 75,
    width: 50,
    backgroundColor: 'white',
    borderWidth: 3,
  }
});
