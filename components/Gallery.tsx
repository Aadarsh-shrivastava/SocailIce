import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';

interface galleryProps {
  data: any;
}
const Gallery = ({data}: galleryProps) => {
  return (
    <View style={[styles.container]}>
      <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: {item: any}) => (
          <GalleryCard url={item.postImage} />
        )}
        refreshing={false}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
