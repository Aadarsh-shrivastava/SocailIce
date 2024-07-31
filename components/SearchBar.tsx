import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return <View style={styles.container}></View>;
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    margin: 10,
    padding: 10,
    borderRadius: 35,
  },
});
