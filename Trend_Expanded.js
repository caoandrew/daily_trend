import { StyleSheet, Text, View, Image } from 'react-native';

const Trend_Expanded = ({trendDict}) => {
    return (
        <View style={styles.col}>
            <View style={styles.row}>
                <Image style={styles.logo} source={trendDict.logo} />
                <Text style={styles.companyName}>{trendDict.companyName}</Text>
            </View>
            <Text style={styles.trend}>{trendDict.trend}</Text>
            <Text style={styles.descriptive}>By {trendDict.author}</Text>
            <Text style={styles.descriptive}>Source: </Text>
            <Text style={styles.descriptive}>Statistic: {trendDict.statistic}</Text>
            <Text style={styles.descriptive}>Source: </Text>
            <Text style={styles.descriptive}>Last Updated: </Text>
            <Text style={styles.descriptive}>Tags: </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    col: {
        flexDirection: 'col',
        width: '100%',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        height: "auto",
        marginBottom: 30
    },
    logo: {
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'contain',
        selfAlign: "left"
    },
    companyName: {
        flex: 3,
        fontSize: 45,
        fontWeight: "bold"
    },
    trend: {
        fontSize: 30,
        fontWeight: "bold",
    },
    descriptive: {
        fontSize: 20,
        marginTop: 10
    }
});

export default Trend_Expanded;