import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {post} from '../data/GalleryData';
interface GalleryCardProps {
  url: string;
}
const GalleryCard = ({url}: GalleryCardProps) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    Image.getSize(
      url,
      (originalWidth, originalHeight) => {
        const desiredWidth = screenWidth / 2 - 20;
        const aspectRatio = originalHeight / originalWidth;
        const desiredHeight = desiredWidth * aspectRatio;
        setDimensions({width: desiredWidth, height: desiredHeight});
      },
      error => {
        console.error(`Couldn't get the image size: ${error.message}`);
      },
    );
  }, [url]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: url}}
        height={dimensions.height}
        width={dimensions.width}
      />
    </View>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {height: 10, width: 10},
    shadowColor: 'black',
    elevation: 18,
  },
  image: {
    borderRadius: 20,
    margin: 5,
    padding: 10,
  },
});
