import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerNavigator from './drawernavigation';
import ProfileStackNavigator from './ProfileStackNavigator';
import ExploreScreen from '../screens/ExploareScreen/ExploreScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={32} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="explore" size={32} />;
          },
        }}
        name="Explore"
        component={ExploreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="send" size={32} />;
          },
        }}
        name="Send"
        component={ExploreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="person" size={32} />;
          },
        }}
        name="Profile"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
