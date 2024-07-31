import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../contexts/themeContext';
import ScreenHeader from '../../components/ScreenHeader';
import {FlatList} from 'react-native-gesture-handler';
import SettingListitem from './components/SettingListitem';
import {useAuth} from '../../contexts/authContext';

const SettingScreen = () => {
  const {theme, toggleTheme} = useTheme();
  const {isLoggedIn, signIn, signOut} = useAuth();
  const data = [
    {title: 'Switch Theme', onPress: toggleTheme},
    {title: 'Logout', onPress: signOut},
  ];
  return (
    <View style={styles(theme).container}>
      <ScreenHeader title={'Settings'} onPress={() => {}} icon={'menu'} />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <SettingListitem title={item.title} onPress={item.onPress} />
        )}
      />
    </View>
  );
};

export default SettingScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {backgroundColor: theme.colors.background, height: '100%'},
    text: {color: theme.colors.foreground},
  });
