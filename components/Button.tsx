import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {theme} from '../theme';

interface ButtonProps {
  text: string;
  buttonColor: string;
  fontColor: string;
  onPress: () => {};
  numOfButtons: number;
}

const Button = ({
  text,
  buttonColor,
  fontColor,
  onPress,
  numOfButtons,
}: ButtonProps) => {
  const screenWidth = Dimensions.get('window').width;
  const padding = theme.spacing.m;
  const totalPadding = (numOfButtons + 1) * padding;
  const buttonWidth = (screenWidth - totalPadding) / numOfButtons;
  const fontSize = Math.max(12, Math.min(18, buttonWidth / 6));

  return (
    <View
      style={[
        styles.container,
        {
          margin: numOfButtons / 2 + theme.spacing.s - 2,
          backgroundColor: buttonColor,
          width: `${(100 - theme.spacing.s) / numOfButtons}%`,
          paddingHorizontal: padding / 2,
        },
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, {color: fontColor, fontSize}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
  },
});
