import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../../components/Button';
import {useTheme} from '../../../contexts/themeContext';
import {strings} from '../../../constants/texts';
import {useAuth} from '../../../contexts/authContext';

const ButtonRow = () => {
  const {theme, toggleTheme} = useTheme();
  const {isLoggedIn, signIn, signOut} = useAuth();
  const buttons = [
    {
      text: strings.MESSAGE,
      buttonColor: theme.colors.inactive,
      fontColor: 'white',
    },
    {
      text: strings.FOLLOW,
      buttonColor: '#4182b0',
      fontColor: 'white',
    },
  ];
  return (
    <View style={[styles.buttonRow, {}]}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          buttonColor={button.buttonColor}
          fontColor={button.fontColor}
          onPress={() => {
            signOut();
            return {};
          }}
          numOfButtons={buttons.length}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ButtonRow;
