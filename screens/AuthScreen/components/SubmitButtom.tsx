import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../../contexts/themeContext';
import {Theme} from '../../../contexts/themeContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface SubmitButtonProps {
  name: string;
  width: number;
  onPress: () => void;
}
const SubmitButtom = ({name, width, onPress}: SubmitButtonProps) => {
  const {theme, toggleTheme} = useTheme();
  const {container, text_and_icon, text, icon} = styles(theme, width);
  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress}>
        <View style={text_and_icon}>
          <Text style={text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButtom;

const styles = (theme: Theme, width: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      margin: theme.spacing.m,
      padding: theme.spacing.s,
      width: theme.spacing.xl * width,
      borderRadius: 20,
    },
    text_and_icon: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.m,
      justifyContent: 'space-around',
    },
    text: {
      fontSize: theme.spacing.m,
      color: theme.colors.background,
    },
    icon: {marginHorizontal: 10, paddingHorizontal: 10},
  });
