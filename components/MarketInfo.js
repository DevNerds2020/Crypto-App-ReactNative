import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


const MarketInfo = ({title, value}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>{title}</Text>
            <Text style={styles.valuetext}>{value}</Text>
        </View>
      )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ffd700'
    },
    titletext: {
        margin: 5,
        fontSize: 20
    },
    valuetext: {
        margin: 5,
        fontWeight: '700'
    },
})

export default MarketInfo