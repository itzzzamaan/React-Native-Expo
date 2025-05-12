import { Color } from '@/constants/Colors';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeCarousel() {
    const flatList = useRef(null)
    const [CurrentIndex,setCurrentIndex] = useState(0)
    const items = [
        {
            label:'From Cars to Cranes — We’ve Got It All',
            description:'From Cars to Cranes — We’ve Got It All',
            image:require('../assets/images/image1.png')
        },
        {
            label:'From Cars to Cranes — We’ve Got It All',
            description:'From Cars to Cranes — We’ve Got It All',
            image:require('../assets/images/image2.webp')
        },
        {
            label:'From Cars to Cranes — We’ve Got It All',
            description:'From Cars to Cranes — We’ve Got It All',
            image:require('../assets/images/image3.jpeg')
        },
    ]
    useEffect(()=>{
       const interval = setInterval(()=>{
            if(flatList.current){
                flatList.current.scrollToIndex({
                    index:(CurrentIndex + 1)% items.length
                })
                setCurrentIndex(CurrentIndex + 1)
            }
        },4000)
        return () => clearInterval(interval)
    },[CurrentIndex])
  
  return (
    <View style={styles.container}>
      <FlatList ref={flatList} horizontal  pagingEnabled data={items}  keyExtractor={(item, index) => index.toString()}  renderItem={({item})=>(
        <View>
            <ImageBackground source={item.image}  style={styles.carouselImage}>
            <View style={styles.opacity}>
            <View style={styles.overlay}>
            <Text style={styles.heading1} >{item.label}</Text>
            <Text style={styles.heading2}>{item.description}</Text>
            </View>
            </View>
            </ImageBackground>
        </View>
      )}/>
    </View>
  )
}

export default HomeCarousel

const styles = StyleSheet.create({
    container:{
        height:'30%',
        width:'90%',
        alignSelf:'center',
        marginTop:30,
        borderRadius:10,
        overflow:'hidden'
    },
    carouselImage:{
        width: windowWidth * 0.9,  
        height: windowHeight * 0.3,
    },
    opacity:{
        backgroundColor: '#0000006E',
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    overlay:{
        paddingLeft:15,
        width:'60%',
        height:'70%',
        alignSelf:'center'
    },
    heading1:{
        fontSize:28,
        fontWeight:'bold',
        color:Color.light.primaryColor
    },
    heading2:{
        color:'white'
    }
})