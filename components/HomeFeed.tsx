import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {feeddata} from '../data/feedData';
import FeedCard from './FeedCard';
import {users} from '../data/UserData';
import Carousal from './Carousal';
import {useTheme} from '../contexts/themeContext';

const HomeFeed = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <FlatList
        data={users[0].posts}
        ListHeaderComponent={<Carousal />}
        renderItem={({item}) => (
          <View>
            <FeedCard post={item} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeFeed;

const styles = StyleSheet.create({container: {}});
