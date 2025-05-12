import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeCarousel from "../HomeCarousel";
import BottomNavigation from "../navigation/BottomNavigation"; // Assuming BottomNavigation is properly structured
import Explore from "./Explore";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.header}>
        <View style={styles.yourLocation}>
          <Text style={{color:'#585858'}}>Your Location</Text>
          <View style={styles.location}>
            <Icon name='location-sharp' size={27} color='#FF001C'/>
            <Text style={styles.heading1}>{'LA, California'}</Text>
            <Icon name='chevron-down-outline' size={27} color='black'/>
          </View>
        </View>
        <TouchableOpacity style={styles.notifyContainer}>
          <Icon name="notifications" size={30} color="#333333" />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <View style={styles.searchbar}>
          <Icon name='search' size={30} color='#767676'/>
          <TextInput placeholderTextColor={'#A7A7A7'} style={styles.searchInputBox} placeholder="Search here..."/>
        </View>
        <View style={styles.filterIcons}>
          <Icon1 name='filter' size={30} color='#585858'/>
        </View>
        <View style={styles.filterIcons}>
          <Icon2 name='plus' size={30} color='#585858'/>
        </View>
      </View>
      <HomeCarousel/>
      <Explore/>
      {/* <SuggestedModels/> */}
      <BottomNavigation /> {/* Ensure BottomNavigation doesn't wrap with another NavigationContainer */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    width: windowWidth,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%'
  },
  yourLocation: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10
  },
  notifyContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F5F4FA',
    borderRadius: 7
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
    transform: [{ translateX: -2 }]
  },
  heading1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  search: {
    height: '8%',
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10
  },
  searchbar: {
    borderRadius: 7,
    paddingLeft: 10,
    display: 'flex',
    columnGap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65%',
    height: '100%',
    backgroundColor: '#F5F4FA'
  },
  searchInputBox: {
    width: '90%'
  },
  filterIcons: {
    height: '100%',
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF3CE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFCC00'
  }
});

// import React from "react";
// import {
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";
// import Icon2 from "react-native-vector-icons/AntDesign";
// import Icon1 from "react-native-vector-icons/FontAwesome";
// import Icon from "react-native-vector-icons/Ionicons";

// import HomeCarousel from "../HomeCarousel";
// import BottomNavigation from "../navigation/BottomNavigation";
// import Articles from "./Articles";
// import Explore from "./Explore";
// import SuggestedModels from "./SuggestedModels";

// const windowWidth = Dimensions.get("window").width;

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor="transparent" />
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <View style={styles.yourLocation}>
//             <Text style={styles.locationLabel}>Your Location</Text>
//             <View style={styles.location}>
//               <Icon name="location-sharp" size={22} color="red" />
//               <Text style={styles.heading1}>LA, California</Text>
//               <Icon name="chevron-down-outline" size={22} color="black" />
//             </View>
//           </View>
//           <View style={styles.notifyContainer}>
//             <Icon name="notifications" size={24} color="black" />
//           </View>
//         </View>

//         {/* Search & Filters */}
//         <View style={styles.search}>
//           <View style={styles.searchbar}>
//             <Icon name="search" size={22} color="black" />
//             <TextInput
//               style={styles.searchInputBox}
//               placeholder="Search here..."
//               placeholderTextColor="#999"
//             />
//           </View>
//           <View style={styles.filterIcons}>
//             <Icon1 name="filter" size={20} color="black" />
//           </View>
//           <View style={styles.filterIcons}>
//             <Icon2 name="plus" size={22} color="black" />
//           </View>
//         </View>

//         {/* Main Content */}
//         <HomeCarousel />
//         <Articles />
//         <Explore />
//         <SuggestedModels />
//         {/* Bottom Navigation */}
//         <BottomNavigation />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   scrollContainer: {
//     paddingBottom: 80,
//   },
//   header: {
//     marginTop: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     paddingHorizontal: 20,
//   },
//   yourLocation: {
//     flexDirection: "column",
//     gap: 6,
//   },
//   locationLabel: {
//     fontSize: 12,
//     color: "#444",
//   },
//   notifyContainer: {
//     width: 42,
//     height: 42,
//     backgroundColor: "#F5F4FA",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   location: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//   },
//   heading1: {
//     color: "black",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   search: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     gap: 10,
//   },
//   searchbar: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#F5F4FA",
//     borderRadius: 12,
//     paddingHorizontal: 10,
//     flex: 1,
//     height: 50,
//   },
//   searchInputBox: {
//     flex: 1,
//     fontSize: 16,
//     paddingLeft: 10,
//     color: "#000",
//   },
//   filterIcons: {
//     width: 48,
//     height: 48,
//     backgroundColor: "#FDF3CE",
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: "#FFCC00",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default HomeScreen;