import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {feedPost} from '../data/feedData';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeedCardHeader from './FeedCardHeader';

interface FeedCardProps {
  post: feedPost;
}
const FeedCard = ({post}: FeedCardProps) => {
  const [toggleDetails, setToggleDetails] = useState<any>(false);
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
      <FeedCardHeader />
      <Pressable
        onPress={() => {
          setToggleDetails(!toggleDetails);
        }}>
        <ImageBackground
          style={styles.card}
          source={{
            uri: post.uri,
          }}
          imageStyle={{borderRadius: 20}}
          height={dimensions.width}
          width={dimensions.width}>
          <View
            style={[
              {
                height: dimensions.width,
                width: dimensions.width,
                borderRadius: 20,
              },
              toggleDetails
                ? {backgroundColor: 'rgba(0,0,0,0.3)'}
                : {backgroundColor: 'rgba(0,0,0,0)'},
            ]}>
            {toggleDetails && (
              <>
                <View
                  style={{
                    position: 'relative',
                    margin: 15,
                    padding: 5,
                    left: 0,
                    alignItems: 'flex-end',
                  }}>
                  <Icon style={styles.icons} name="comment" size={32} />
                  <Icon style={styles.icons} name="share" size={32} />
                  <Icon style={styles.icons} name="favorite-border" size={32} />
                  <Icon style={styles.icons} name="bookmark-border" size={32} />
                </View>
                <View style={styles.details}>
                  <Text style={styles.caption}>Caption</Text>
                  <Text style={styles.description}>Tags</Text>
                </View>
              </>
            )}
            <View></View>
          </View>
        </ImageBackground>
        {/* </TouchableOpacity> */}
      </Pressable>
    </View>
  );
};

export default FeedCard;

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
  },
  details: {position: 'absolute', bottom: 0, margin: 10},
  icons: {marginTop: 20, color: 'white', borderColor: 'black'},
  caption: {fontSize: 24, color: 'white'},
  description: {color: 'white'},
});
