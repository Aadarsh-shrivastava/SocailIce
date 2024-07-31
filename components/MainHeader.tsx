import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const MainHeader = ({}) => {
  return (
    <View style={styles.container}>
      <Icon name={'navicon'} size={32} onPress={() => {}} />
      <Text style={styles.title}>{'title'}</Text>
      <Icon name={'bell'} size={32} />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
