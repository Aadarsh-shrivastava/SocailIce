import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeFeed from '../../components/HomeFeed';
import MainHeader from './components/MainHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import HorizontalSlider from '../../components/SlidablePostCards';
import Carousal from '../../components/Carousal';
import {useTheme} from '../../contexts/themeContext';
import {darkTheme} from '../../theme';

const HomeScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme == darkTheme ? 'light-content' : 'dark-content'}
        hidden={false}
        translucent={false}
      />
      <MainHeader />
      <HomeFeed />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
