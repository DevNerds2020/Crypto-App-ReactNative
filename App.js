import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignalScreen from './screens/SignalScreen';
import TeachingScreen from './screens/TeachingScreen';
import CoinlistScreen from './screens/CoinlistScreen';
import GlobalDataScreen from './screens/GlobalDataScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "BITCOIN GENERAL", headerStyle:{
            backgroundColor:'#ffd700'
          }}}
          />
        <Stack.Screen
          name="coinlistscreen"
          component={CoinlistScreen}
          options={{title: 'بازار ارز ها', headerStyle:{
              backgroundColor:'#ffd700',
          }}}
         />
     
        <Stack.Screen
          name="signalscreen"
          component={SignalScreen}
          options={{title: 'سیگنال', headerStyle:{
            backgroundColor:'#ffd700'
          }}}
         />
        <Stack.Screen
          name="teachingscreen"
          component={TeachingScreen}
          options={{title: 'آموزش', headerStyle:{
            backgroundColor:'#ffd700'
            }}}
         />
         <Stack.Screen 
          name="globaldatascreen"
          component={GlobalDataScreen}
          options={{title: 'اطلاعات بازار', headerStyle:{
            backgroundColor:'#ffd700'
            }}}
         />
          <Stack.Screen 
          name="registerscreen"
          component={RegisterScreen}
          options={{title: 'ثبت نام', headerStyle:{
            backgroundColor:'#ffd700'
            }}}
         />
         <Stack.Screen 
          name="loginscreen"
          component={LoginScreen}
          options={{title: 'ورود', headerStyle:{
            backgroundColor:'#ffd700'
            }}}
         />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
