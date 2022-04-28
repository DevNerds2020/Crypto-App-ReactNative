import React, {useRef, useMemo, useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import ListItem from '../components/Listitem';
import MarketInfo from '../components/MarketInfo';
import getMarketData from '../services/cryptoService';
import getDominanceData from '../services/dominanceData';
import getMarketCap from '../services/globalData';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import Chart from '../components/Chart';
import getFearAndGreedIndex from '../services/fearGreed'

const GlobalDataScreen = () => {
    const [globaldata, setGlobaldata] = useState([]);
    const [domdata, setDomdata] = useState([]);
    const [fgdata, setFgdata] = useState([]);
    useEffect(() => {
        const fetchDomData = async () => {
          const domData = await getDominanceData();
          setDomdata(domData)
        }
        const fetchGlobalData = async () => {
          const globalData = await getMarketCap();
          setGlobaldata(globalData)
        }
        const fetchFgData = async () => {
          const fgData = await getFearAndGreedIndex();
          setFgdata(fgData)
        }
        fetchGlobalData();
        fetchDomData();
        fetchFgData();
      }, [])
    return (
      <ScrollView>
        <View style={styles.container}>
            <ScrollView style={styles.marketinfocontainer} showsVerticalScrollIndicator= {false}>
              <MarketInfo title= 'ارزش بازار' value={globaldata.total_market_cap + '$'} />
              <MarketInfo title='حجم معاملات امروز' value={globaldata.total_volume_24h+ '$'} />
              <MarketInfo title='حجم معاملات دیروز' value={globaldata.total_volume_24h_yesterday+ '$'} />
              {fgdata.length ? <MarketInfo title='شاخص ترس و طمع' value={fgdata[0].value} /> :
               <MarketInfo title='شاخص ترس و طمع' value='loading' />}
              <MarketInfo title='دامیننس بیت کوین' value={domdata.btc_dominance} />
              <MarketInfo title='تعداد صرافی های فعال بازار' value={domdata.active_exchanges} />
              <MarketInfo title='تعداد کوین های فعال بازار' value={domdata.active_cryptocurrencies} />
          </ScrollView>
          <Image source={{uri: 'https://alternative.me/crypto/fear-and-greed-index.png'}} style = {styles.fearandgreedimage}/>  
        </View>
      </ScrollView>  
    )
}

export default GlobalDataScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  marketinfocontainer: {

  },
  fearandgreedimage: {
    height: 350,
    width: 350,
    resizeMode: 'contain'
  }
})
