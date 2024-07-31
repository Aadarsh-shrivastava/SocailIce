import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BottomTabs from './navigation/tabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/drawernavigation';
import {ThemeProvider} from './contexts/themeContext';
import Navigation from './navigation/MainStackNavigator';
import {AuthProvider} from './contexts/authContext';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <Navigation />
          {/* <BottomTabs /> */}
          {/* <DrawerNavigator /> */}
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
