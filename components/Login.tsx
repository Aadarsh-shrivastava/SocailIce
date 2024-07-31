import React from 'react';
import {View, StyleSheet} from 'react-native';

const NeumorphicContainer = () => {
  return (
    <View style={[styles.highlight, styles.container]}>
      {/* Your content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 10,
    shadowRadius: 4.65,
    elevation: 15,
    overflow: 'hidden',
  },

  highlight: {
    margin: 10,
    backgroundColor: '#ccccff',
    borderRadius: 15,
    padding: 20,
    // borderColor: 'black',
    // borderStyle: 'solid',
    // borderWidth: 1,
    shadowColor: 'red',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 15,
    shadowOpacity: 10,
    shadowRadius: 4.65,
  },
});

export default NeumorphicContainer;
