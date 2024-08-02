import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import {Theme, useTheme} from '../contexts/themeContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FullDisplayCard from './FullDisplayCard';

interface galleryProps {
  data: any;
}

const Gallery = ({data}: galleryProps) => {
  const {theme} = useTheme();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activePost, setActivePost] = useState<{url: string; caption: string}>({
    url: '',
    caption: '',
  });
  return (
    <View style={[styles(theme).container]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalActive}
        onRequestClose={() => {
          setIsModalActive(false);
        }}>
        <TouchableWithoutFeedback onPress={() => setIsModalActive(false)}>
          <View style={styles(theme).modalBackground}>
            <TouchableWithoutFeedback>
              <View>
                <FullDisplayCard
                  url={activePost.url}
                  caption={activePost.caption}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity
            onPress={() => {
              setActivePost({url: item.postImage, caption: ''});
              setIsModalActive(true);
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
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '90%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
  });
