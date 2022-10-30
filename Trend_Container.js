import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import Trend_Expanded from './Trend_Expanded';

const Trend_Container = ({trendDict}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    
  return (
    <View style={styles.box}><TouchableOpacity onPress={toggleModal}>
      <Overlay childrenWrapperStyle={styles.modal} visible={isModalVisible} onClose={() => setModalVisible(false)} closeOnTouchOutside>
        <Trend_Expanded trendDict={trendDict} />
      </Overlay>
      <View style={styles.row}>
        <Image style={styles.logo} source={trendDict.logo} />
        <View style={styles.col}>
          <Text style={styles.trendName}>{trendDict.trendName}</Text>
          <Text style={styles.trend}>{trendDict.trend}</Text>
          <Text style={styles.statistic}>By {trendDict.author}</Text>
          <Text style={styles.statistic}>{trendDict.statistic}</Text>
        </View>
      </View>
    </TouchableOpacity></View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: "60%",
    borderRadius: 10
  },
  box: {
    width: '92%',
    height: '12%',
    marginTop: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'col',
    flex: 5
  },
  companyName: {
    fontSize: 30,
    textAlign: "left"
  },
  trendName: {
    fontSize: 20,
    marginLeft: 'auto',
    fontWeight: "bold"
  },
  trend: {
    fontSize: 30,
    textAlign: "right"
  },
  statistic: {
    fontSize: 15,
    textAlign: "right"
  }
});

export default Trend_Container;