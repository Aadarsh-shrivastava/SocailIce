import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingScreen from '../screens/SettingScreens/SettingScreen';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  SettingScreen: undefined;
};
const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    <ProfileStack.Screen name="SettingScreen" component={SettingScreen} />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
