import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import TrendingCoins from '../components/TrendingCoins';
import TopTrendingCoins from '../services/Signals'

const SignalScreen = () => {
    const [trendcoins, setTrendcoins] = useState([])
    useEffect( () => {
        const fetchtoptc= async () => {
            const toptrendingcoins = await TopTrendingCoins();
            setTrendcoins(toptrendingcoins);
        }

        fetchtoptc()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.trendheader}>
                <Text style={{fontWeight:'600'}}>
                    coingecko کوین های ترند شده در
                </Text>
               
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <ScrollView style={styles.trendsection} horizontal showsHorizontalScrollIndicator={false}>
                
                    {trendcoins.length ? trendcoins.map((item, index) => 
                        <TrendingCoins key={index} logo={item.item.small} name={item.item.name} rank={item.item.market_cap_rank} />
                    ) :<Text>loading</Text>}
                </ScrollView>
            </View>
        </View>
    )
}

export default SignalScreen

const styles = StyleSheet.create({
    container: {
    },
    trendsection: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#ffd700',
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
    },
    trendheader: {
        top: 15,
        paddingBottom: 30,
        paddingRight: 10,
        alignItems: 'center'
    }
})
