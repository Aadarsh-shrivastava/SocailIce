import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../contexts/themeContext';

interface StatsProps {
  statValue: string;
  statName: string;
}
const Stats = ({statValue, statName}: StatsProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: theme.colors.foreground,
        }}>
        {statValue}
      </Text>
      <Text style={{color: theme.colors.foreground, fontSize: theme.spacing.m}}>
        {statName}
      </Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({});
