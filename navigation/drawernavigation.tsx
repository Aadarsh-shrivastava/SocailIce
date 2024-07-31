import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import BottomTabs from './tabNavigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <drawer.Navigator screenOptions={{headerShown: false}}>
      <drawer.Screen name="Socialize" component={ProfileScreen} />
    </drawer.Navigator>
  );
};

export default DrawerNavigator;
