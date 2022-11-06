import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
      <View style={styles.navBar}>
        <View style={styles.leftContainer}>
          <View style={styles.leftIcon}>
            <Icon name="shield-sharp" size={25} color="#000000" />
          </View>
        </View>
        <Text style={styles.middleContainer}>
          {this.props.title}
        </Text>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon}>
            <Icon name="settings-sharp" size={25} color="#000000" />
          </View>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 108,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0
  },
  leftContainer: {
    justifyContent: 'flex-start',   
    flexDirection: 'row'
  },
  middleContainer: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    fontSize:18,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight:10
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftIcon: {
    marginLeft:15,
    marginRight:5,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  rightIcon: {
    paddingHorizontal:15,
    resizeMode: 'contain',
    backgroundColor: 'white',
  }
});

export default Header;