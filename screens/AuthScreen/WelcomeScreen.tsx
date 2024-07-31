import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Authheader from './components/Authheader';
import {Theme, useTheme} from '../../contexts/themeContext';
import Input from './components/Input';
import {darkTheme} from '../../theme';
import SubmitButtom from './components/SubmitButtom';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {
  AppStackParamList,
  AuthStackParamList,
} from '../../navigation/MainStackNavigator';

type HomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;
const WelcomeScreen = ({navigation}: HomeScreenProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme == darkTheme ? 'light-content' : 'dark-content'}
        hidden={false}
        translucent={false}
      />
      {/* <MainHeader /> */}
      <Authheader
        title={'Welcome'}
        description={'Please Sign In to continue ...'}
      />
      <View style={styles(theme).buttons}>
        <SubmitButtom
          name={'Login'}
          width={8}
          onPress={() => {
            console.log('called');
            navigation.navigate('Login');
          }}
        />
        <SubmitButtom
          name={'Sign Up'}
          width={8}
          onPress={() => {
            console.log('called');
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = (props: Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: props.colors.background,
    },
    buttons: {margin: 'auto'},
  });
