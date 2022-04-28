import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Navbar from '../components/Navbar'
const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image} source={require('../images/logo.jpeg')}/>
                <Text style={styles.text}>به دنیای کریپتو خوش آمدید</Text>
            </View>
            <Navbar />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 60,
        marginBottom: 10,
        marginTop: 10,
    },
    text: {
        color: '#ffd700',
        fontSize: 30,
    },
   
})
export default HomeScreen;