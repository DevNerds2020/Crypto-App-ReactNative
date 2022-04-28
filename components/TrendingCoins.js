import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const TrendingCoins = ({name, rank, logo}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: logo}} style={styles.logosection}/>
            <Text style={styles.namesection}>{name}</Text>
            <Text style={styles.ranksection}>rank: {rank}</Text>  
        </View>
    )
}

export default TrendingCoins

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 110,
        width: 110,
        backgroundColor: '#fafad2',
        justifyContent: 'space-around',
        margin: 10
    },
    logosection: {
        width: 30,
        height: 30,
        padding: 10, 
        marginLeft: 5,
    },
    namesection: {
        marginLeft: 5,
        fontWeight: '200'
    },
    ranksection: {
        marginLeft: 5,
        fontWeight: '500'
    }
})
