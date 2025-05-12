import { useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'

function SplashScreen() {
    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            //  navigation.navigate('SplashCarousel')
             navigation.navigate('Language')
        },2000)
    },[])
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.splashBg}
        source={require('../../assets/images/splash-bg.png')}
        resizeMode="cover" // or "contain" if you want full image without crop
      >
        <View style={styles.logoContainer}>
            <Image style={styles.logoStyles} resizeMode='contain' source={require('../../assets/images/splash-logo.png')}/>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SplashScreen

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashBg: {
    width: width,
    height: height,
  },
  logoContainer:{
     backgroundColor: '#0000006E',
    height:'100%',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  logoStyles:{
        height:'60%',
        width:'60%',
        alignSelf:'center'
  }
})
