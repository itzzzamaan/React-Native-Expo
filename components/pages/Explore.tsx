import { Fonts } from '@/constants/Fonts'
import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

function Explore() {
  const items = [
    {
      label:"Trucks",
      image:require('../../assets/images/truck.png')
    },
    {
      label:"Excavators",
      image:require('../../assets/images/excavator.png')
    },{
      label:'Wheel Loader',
      image:require('../../assets/images/wheelloader.png')
    },{
      label:'Cranes',
      image:require('../../assets/images/cranes.png')
    },
    {
      label:'Trailers',
      image:require('../../assets/images/trailers.png')
    },{
      label:'Spare Parts',
      image:require('../../assets/images/spareparts.png')
    },
    {
      label:'Buses',
      image:require('../../assets/images/buses.png')
    },
    {
      label:'Concrete Mixer',
      image:require('../../assets/images/concretemixer.jpg')
    }
  ]
  return (
    <View style={styles.exploreContainer}>
      <Text style={styles.heading1}>Explore</Text>
      <View style={styles.modelsContainer}>
          <FlatList horizontal contentContainerStyle={styles.flatListStyle} keyExtractor={(item, index) => index.toString()} data={items} renderItem={({item})=>(
            <View style={styles.exploreItems}>
              <View style={styles.imageBox}>
              <Image source={item.image} style={styles.images} />
              </View>
              <Text style={styles.heading2}>{item.label}</Text>
            </View>
          )}/>
      </View>
    </View>
  )
}

export default Explore


const styles = StyleSheet.create({
     heading1:{
        color:'black',
        fontSize:Fonts.heading1,
        fontWeight:'bold'
    },
    exploreContainer:{
      paddingLeft:20,
      paddingTop:20,
      paddingRight:20,
      height:'35%'
    },
    modelsContainer:{
      marginTop:10,
      height:'100%',
      width:'100%',
    },
    exploreItems:{
      height:60,
      width:75,
      backgroundColor:'white',
      borderRadius:7
    },
    flatListStyle:{
      marginTop:10,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      columnGap:15,
      // overflow:'hidden',
      display:'flex',
      rowGap:55,
      flexDirection:'row',
      flexWrap:'wrap'
    },
    images:{
      resizeMode:'contain',
      height:'100%',
      width:'100%',
      shadowColor:'#56006A'
    },
    imageBox:{
      elevation:20,
    },
    heading2:{
      alignSelf:'center',
      fontSize:12,
      fontWeight:'300',
      marginTop:10
    }
})