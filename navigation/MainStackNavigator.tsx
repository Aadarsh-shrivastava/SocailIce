import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../contexts/authContext';
import BottomTabs from './tabNavigation';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInScreen from '../screens/AuthScreen/SignInScreen';
import WelcomeScreen from '../screens/AuthScreen/WelcomeScreen';
import SignUpScreen from '../screens/AuthScreen/SignUpScreen';

export type AppStackParamList = {
  App: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

const AppStackScreen: React.FC = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen name="App" component={BottomTabs} />
  </AppStack.Navigator>
);

const AuthStackScreen: React.FC = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

const Navigation: React.FC = () => {
  const {isLoggedIn} = useAuth();
  return isLoggedIn ? <AppStackScreen /> : <AuthStackScreen />;
};

export default Navigation;
