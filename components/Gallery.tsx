import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import {Theme, useTheme} from '../contexts/themeContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface galleryProps {
  data: any;
  selectImage: (item: {url: string; caption: string}) => void;
}

const Gallery = ({data, selectImage}: galleryProps) => {
  const {theme} = useTheme();
  return (
    <View style={[styles(theme).container]}>
      <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity
            onPress={() => {
              selectImage({url: item.postImage, caption: item.caption || ''});
            }}>
            <GalleryCard url={item.postImage} />
          </TouchableOpacity>
        )}
        refreshing={false}
      />
    </View>
  );
};

export default Gallery;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: theme.colors.background,
    },
  });
