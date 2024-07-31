import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubmitButtom from './components/SubmitButtom';
import {Theme, useTheme} from '../../contexts/themeContext';
import Input from './components/Input';
import Authheader from './components/Authheader';
import {darkTheme} from '../../theme';
import {useAuth} from '../../contexts/authContext';

const SignUpScreen = () => {
  const {theme, toggleTheme} = useTheme();
  const {isLoggedIn, signIn, signOut} = useAuth();
  return (
    <View style={styles(theme).container}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme == darkTheme ? 'light-content' : 'dark-content'}
        hidden={false}
        translucent={false}
      />
      <Authheader title="Sign Up" description="Fill your details" />
      <Input
        iconName="email"
        placeholder="nothing"
        value="not"
        secureTextEntry={false}
        label={'Email'}
        onChangeText={function (): {} {
          console.log('called');
          return {};
        }}
      />
      <Input
        iconName="person"
        placeholder="Ful name"
        value="not"
        secureTextEntry={false}
        label={'Full name'}
        onChangeText={function (): {} {
          return {};
        }}
      />
      <Input
        iconName="password"
        placeholder="Password"
        value="not"
        secureTextEntry={false}
        label={'Password'}
        onChangeText={function (): {} {
          return {};
        }}
      />
      <Input
        iconName="password"
        placeholder="Confirm Password"
        value="not"
        secureTextEntry={false}
        label={'Confirm Password'}
        onChangeText={function (): {} {
          return {};
        }}
      />
      <SubmitButtom name={'Submit'} width={3} onPress={signIn} />
    </View>
  );
};

export default SignUpScreen;

const styles = (props: Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: props.colors.background,
    },
  });
