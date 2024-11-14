import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import FeedAudio from './screens/FeedAudio';

import LaunchScreen_Premium from "./screens/LaunchScreen_Premium";
import HomeScreen from "./screens/HomeScreen";
import MyPlayList from "./screens/MyPlayList";
import MyLibrary from "./screens/MyLibrary";
import PlayListDetail from "./screens/PlayListDetail";
import Search from "./screens/Search";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LaunchScreen_Premium">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="MyPlayList" component={MyPlayList} options={{headerShown: false}} />
      <Stack.Screen name="PlayListDetail" component={PlayListDetail} options={{headerShown: false}} />
      <Stack.Screen name="LaunchScreen_Premium" component={LaunchScreen_Premium} options={{headerShown: false}} />
      <Stack.Screen name="ToSearch" component={Search} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {height: 50},}}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon:
            ({focused}) => (
              <MaterialCommunityIcons name="home" color={focused ? '#60D6E6' : 'black'} size={28} />
            ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search}
        options={{
          tabBarIcon:
            ({focused}) => (
              <Ionicons name="search" color={focused ? '#60D6E6' : 'black'} size={28} />
            ),
        }}
      />
      <Tab.Screen 
        name="MyLibrary" 
        component={MyLibrary}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon:
            ({focused}) => (
              <Ionicons name="library" color={focused ? '#60D6E6' : 'black'} size={28} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

    <View style={styles.container}>
      {/* <LaunchScreen/> */}
      <FeedAudio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
