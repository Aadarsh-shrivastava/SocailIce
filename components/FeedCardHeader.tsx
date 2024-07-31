import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {useTheme} from '../contexts/themeContext';
import Icons from 'react-native-vector-icons/MaterialIcons';

const FeedCardHeader = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          margin: theme.spacing.s,
          alignItems: 'center',
        }}>
        <Avatar height={40} width={40} />
        <View style={{margin: theme.spacing.s}}>
          <Text
            style={{
              alignSelf: 'center',
              color: theme.colors.foreground,
            }}>
            John Smith
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              color: theme.colors.foreground,
            }}>
            6 Months ago
          </Text>
        </View>
      </View>
      <Icons
        name="more-vert"
        size={theme.spacing.l}
        color={theme.colors.foreground}
        onPress={() => {}}
      />
    </View>
  );
};

export default FeedCardHeader;

const styles = StyleSheet.create({});
