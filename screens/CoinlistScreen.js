import React, {useRef, useMemo, useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native';
import ListItem from '../components/Listitem';
import getMarketData from '../services/cryptoService';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import Chart from '../components/Chart';
const CoinlistScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [selectedCoinData, setSelectedCoinData] = useState(null);
   
  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }
    
    fetchMarketData();
  }, [])

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <FlatList showsVerticalScrollIndicator = {false}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              onPress={() => openModal(item)}
            />
          )}
        />
        <View style={styles.globaldatabtn}>
          <TouchableOpacity style={styles.globaldata} onPress={() => navigation.navigate('globaldatascreen')}>
            <Text>
              اطلاعات بازار
            </Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>   
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
          >
          { selectedCoinData ? (
            <Chart
              currentPrice={selectedCoinData.current_price}
              logoUrl={selectedCoinData.image}
              name={selectedCoinData.name}
              symbol={selectedCoinData.symbol}
              priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
              sparkline={selectedCoinData?.sparkline_in_7d.price}
            />
          ) : null}
        </BottomSheetModal>
      </BottomSheetModalProvider>  
  );
}

export default CoinlistScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleWrapper: {
      marginTop: 20,
      paddingHorizontal: 16,
    },
    largeTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#A9ABB1',
      marginHorizontal: 16,
      marginTop: 16,
    },
    bottomSheet: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
      globaldata: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'yellow',
    },
    globaldatabtn:{
      position: 'absolute',
      bottom: 10,
      right: 10
    },
  });