import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {feeddata} from '../data/feedData';
import {users} from '../data/UserData';
import FeedCard from './FeedCard';
import CarousalCard from './CarousalCard';

const Carousal = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={users[0].posts}
        renderItem={({item}) => (
          <View>
            <CarousalCard post={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({});
