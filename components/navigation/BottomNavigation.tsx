// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../pages/HomeScreen';
// import Icon1 from 'react-native-vector-icons/FontAwesome';

// const Tab = createBottomTabNavigator();

// function BottomNavigation() {
//   return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             // if (route.name === 'homeScreen') {
//             //   iconName = 'home';
//             // }
//             return <Icon1 name={iconName} size={27} color='black' />;
//           },
//           tabBarStyle: {
//             height: 100,
//             backgroundColor: 'black',
//           },
//           tabBarShowLabel: false,
//         })}
//       >
//         <Tab.Screen
//           name='homeScreen'
//          // component={""}
//           options={{ headerShown: false }}
//         />
//       </Tab.Navigator>
//   );
// }

// export default BottomNavigation;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import { View, Text } from 'react-native';

// // Dummy screens for the tabs
// const DummyScreen = ({ name }: { name: string }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>{name} Screen</Text>
//   </View>
// );

// const Tab = createBottomTabNavigator();

// function BottomNavigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           // Choose icon based on the route
//           switch (route.name) {
//             case 'Home':
//               iconName = 'home';
//               break;
//             case 'Search':
//               iconName = 'search';
//               break;
//             case 'Profile':
//               iconName = 'user';
//               break;
//             case 'Settings':
//               iconName = 'cogs';
//               break;
//             default:
//               iconName = 'home';
//               break;
//           }
//           return <Icon1 name={iconName} size={size} color={color} />;
//         },
//         tabBarStyle: {
//           height: 60,
//           backgroundColor: '#FFFFFF',
//           borderTopWidth: 0,
//         },
//         tabBarShowLabel: false, // Hide tab labels
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={DummyScreen}
//         initialParams={{ name: 'Home' }}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={DummyScreen}
//         initialParams={{ name: 'Search' }}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={DummyScreen}
//         initialParams={{ name: 'Profile' }}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={DummyScreen}
//         initialParams={{ name: 'Settings' }}
//         options={{ headerShown: false }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default BottomNavigation;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Guide from '../Guide';
import HomeScreen from '../pages/HomeScreen';
import Profile from '../Profile';
import Reels from '../Reels';

// Dummy screen
const DummyScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>{`${route.name} Screen`}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Profile':
              iconName = 'user';
              break;
            case 'Reels':
              iconName = 'film';
              break;
            case 'Guide':
              iconName = 'bookmark';
              break;
            case 'Home':
              iconName = 'home';
              break;
            default:
              iconName = 'circle';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text style={{ color: focused ? '#FFD700' : '#FFFFFF', fontSize: 12 }}>
              {route.name}
            </Text>
          );
        },
        tabBarActiveTintColor: '#FFD700', // Yellow
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          height: 70,
          paddingBottom: 8,
          paddingTop: 4,
          borderTopWidth: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Guide" component={Guide} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
