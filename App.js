import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Trend_Container from './Trend_Container.js';
import Header from './Header.js';

export default function App() {
  return (
    <><View style={styles.bar}>
      <StatusBar/>
      <Header title="Daily Trends" backgroundColor="FFFFFF" />
    </View><View style={styles.container}>
        {/* <Header /> */}
        <Trend_Container trendDict={trendList[0]} />
        <Trend_Container trendDict={trendList[1]} />
        <Trend_Container trendDict={trendList[2]} />
        <StatusBar style="auto" />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'top',
  },
  bar: {
    backgroundColor: "#FFFFFF", // TO CHANGE
    barStyle: "dark-content",
    flex: 0.1
  }
});

const spotify = {
  companyName: "Spotify",
  logo: require("./images/spotify.png"),
  trendName: "#1 Song Today",
  trend: "Power",
  author: "Kanye West",
  statistic: "5,523,060 Plays"
};

const youtube = {
  companyName: "YouTube",
  logo: require("./images/youtube.png"),
  trendName: "#1 Video Today",
  trend: "Cat fights dog",
  author: "recorderguy",
  statistic: "15,231,323 Views"
};

const twitter = {
  companyName: "Twitter",
  logo: require("./images/twitter.png"),
  trendName: "#1 Tweet Today",
  trend: "I love Hello World",
  author: "githuber1",
  statistic: "420,015 Likes"
};

const trendList = [spotify, youtube, twitter];