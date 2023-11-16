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
import HomeSvgComponent from './assets/icons/HomeSvgComponent';
import CraftSvgComponent from './assets/icons/CraftSvgComponent';
import InventorySvgComponent from './assets/icons/InventorySvgComponent';
import ProfileSvgComponent from './assets/icons/ProfileSvgComponent';
import MarketplaceSvgComponent from './assets/icons/MarketplaceSvgComponent';
import SignUp from './screens/tabScreens/SignUp';

// Stack

const HomeStack = createNativeStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Feed} />
      <HomeStack.Screen name="FeedDetailScreen" component={FeedDetailScreen} />
      <HomeStack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
    </HomeStack.Navigator>
  );
};

// Bottom Tab
const Tab = createBottomTabNavigator();

const renderIcon = (name, focused) => {
  let activeColor = focused ? '#131623' : '#9D9FAD';

  switch (name) {
    case 'Feed':
      return <HomeSvgComponent width={23} height={22} style={{ color: activeColor }} />;
    case 'Crafting':
      return <CraftSvgComponent width={22} height={22} style={{ color: activeColor }} />;
    case 'Marketplace':
      return <MarketplaceSvgComponent width={22} height={22} style={{ color: activeColor }} />;
    case 'Inventory':
      return <InventorySvgComponent width={22} height={22} style={{ color: activeColor }} />;
    case 'Profile':
      return <ProfileSvgComponent width={22} height={22} style={{ color: activeColor }} />;
    case 'Sign Up':
      return <ProfileSvgComponent width={22} height={22} style={{ color: activeColor }} />;
  }
};

const TabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          const { name } = route;

          return renderIcon(name, focused);
        },
        tabBarActiveTintColor: '#131623',
        tabBarInactiveTintColor: '#9D9FAD',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Feed" component={HomeStackGroup} options={{ headerShown: false }} />
      <Tab.Screen name="Crafting" component={Crafting} />
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Inventory" component={Inventory} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen options={{ headerShown: false }} name="Sign Up" component={SignUp} />
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
