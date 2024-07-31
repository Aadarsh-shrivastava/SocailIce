import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {feedPost} from '../data/feedData';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CarousalCardProps {
  post: feedPost;
}
const CarousalCard = ({post}: CarousalCardProps) => {
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
      post.uri,
      (originalWidth, originalHeight) => {
        const desiredWidth = screenWidth - 40;
        setDimensions({width: desiredWidth, height: 300});
      },
      error => {
        console.error(`Couldn't get the image size: ${error.message}`);
      },
    );
  }, [post.uri]);

  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}></View>
      <ImageBackground
        style={styles.card}
        source={{
          uri: post.uri,
        }}
        height={dimensions.width}
        imageStyle={{borderRadius: 20, shadowRadius: 20}}
        width={(dimensions.width * 3) / 2}>
        <View
          style={[
            {
              height: dimensions.width,
              width: dimensions.width / 2,
              borderRadius: 20,
            },
          ]}>
          <View
            style={{
              position: 'relative',
              margin: 15,
              padding: 5,
              left: 0,
              alignItems: 'flex-end',
            }}></View>
          <View style={styles.details}>
            <Avatar height={40} width={40} />
            <View style={{margin: 10}}>
              <Text
                style={{
                  alignSelf: 'center',
                }}>
                John Smith
              </Text>
              <Text style={styles.caption}>Caption</Text>
            </View>
          </View>

          <View></View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarousalCard;

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    padding: 10,
    borderRadius: 25,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 12,
  },
  image: {
    borderRadius: 20,
    padding: 20,

    elevation: 18,
  },
  details: {position: 'absolute', bottom: 0, margin: 10, flexDirection: 'row'},
  icons: {marginTop: 20, color: 'white', borderColor: 'black'},
  caption: {fontSize: 24},
  description: {},
});
