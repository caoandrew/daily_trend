import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
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