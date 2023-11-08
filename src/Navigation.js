import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/tabScreens/Profile';
import Inventory from './screens/tabScreens/Inventory';
import Marketplace from './screens/tabScreens/Marketplace';
import Crafting from './screens/tabScreens/Crafting';
import Feed from './screens/tabScreens/Feed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedDetailScreen from './screens/homeStack/FeedDetailScreen';
import CreatePostScreen from './screens/homeStack/CreatePostScreen';
import NotificationScreen from './screens/homeStack/NotificationScreen';

// Stack

const HomeStack = createNativeStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={Feed} />
      <HomeStack.Screen name="FeedDetailScreen" component={FeedDetailScreen} />
      <HomeStack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
    </HomeStack.Navigator>
  );
};

// Bottom Tab
const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Crafting" component={Crafting} />
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Inventory" component={Inventory} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};

export default Navigation;
