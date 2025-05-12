import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgetPassword from '../pages/ForgetPassword';
import HomeScreen from '../pages/HomeScreen';
import Language from '../pages/Language';
import SignIn from '../pages/SignIn';
import SignUpScreen from '../pages/SignUp';
import SplashCarousel from '../pages/SplashCarousel';
import SplashScreen from '../pages/SplashScreen';
import VerifyOtp from '../pages/VerifyOtp';



const Stack = createNativeStackNavigator();

function Navigation() {
  return (
        <Stack.Navigator  initialRouteName='splashscreen'>
            <Stack.Screen name='splashscreen'
             component={SplashScreen} options={{ headerShown: false }} ></Stack.Screen>
             <Stack.Screen name='SplashCarousel' component={SplashCarousel} options={{ headerShown: false }}/>
            <Stack.Screen name='login' component={SignIn} options={{headerShown:false}}/>
            <Stack.Screen name='signup' component={SignUpScreen} options={{headerShown:false}}/>
            <Stack.Screen name='forgot-password' component={ForgetPassword} options={{headerShown:false}}/>
            <Stack.Screen name='verify-otp' component={VerifyOtp} options={{headerShown:false}}/>
            <Stack.Screen name='homescreen' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Language' component={Language} options={{headerShown:false}}/>
        </Stack.Navigator>
  )
}

export default Navigation
