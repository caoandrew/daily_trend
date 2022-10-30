import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> Home </Text> */}
        <StatusBar style="auto" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Header;