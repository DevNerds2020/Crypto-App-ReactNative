import { NavigationRouteContext } from '@react-navigation/core'
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();
        return (
            <View style={styles.navbar}>
               <TouchableOpacity style={styles.icon}
                onPress= {()=> navigation.navigate('loginscreen')}>
                   <Ionicons name='man-outline' size='25' />
                    <Text style={styles.text}>
                        ورود
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.icon}
                onPress={() => navigation.navigate('signalscreen')}
               >
                   <Ionicons name='checkmark-circle-outline' size='25' />
                   <Text style={styles.text}>
                       سیگنال
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.icon}
                    onPress={() => navigation.navigate('coinlistscreen')}
                    >
                   <Ionicons name='reader-outline' size='25' />
                   <Text style={styles.text}>
                        بازار
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.icon}
                    onPress={() => navigation.navigate('teachingscreen')}
                    >
                <Ionicons name='library-outline' size='25' />
                   <Text style={styles.text}>
                        آموزش
                   </Text>
               </TouchableOpacity>
            </View>
        )
    
}
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'yellow',
        width: '100%',
        height: 80,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row-reverse'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18
    }
})
export default Navbar
