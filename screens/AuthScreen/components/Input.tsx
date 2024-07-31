import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Theme, useTheme} from '../../../contexts/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface InputProps {
  iconName: string;
  label: string;
  value: string;
  onChangeText: () => {} | (() => void);
  placeholder: string;
  secureTextEntry: any;
}
const Input = ({
  iconName,
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: InputProps) => {
  const {theme, toggleTheme} = useTheme();
  const {container, form, labelStyle, field} = styles(theme);
  return (
    <View style={container}>
      <View style={form}>
        <Icon name={iconName} size={theme.spacing.l} />
        <View style={{marginHorizontal: 10}}>
          {/* <Text style={labelStyle}>{label}</Text> */}
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            // value={value}
            style={field}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: theme.spacing.s,
      marginVertical: theme.spacing.m,
      paddingHorizontal: theme.spacing.m,
      minWidth: '80%',
    },
    form: {
      position: 'relative',
      paddingHorizontal: theme.spacing.s,
      borderRadius: theme.spacing.s,
      elevation: 18,
      backgroundColor: theme.colors.background,
      shadowOffset: {height: 10, width: 10},
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelStyle: {
      position: 'absolute',
      left: theme.spacing.s,
      fontSize: theme.spacing.s * 1.5,
    },
    field: {},
  });
