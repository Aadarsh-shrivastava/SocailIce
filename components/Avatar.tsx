import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface AvatarProps {
  height: number;
  width: number;
}
const Avatar = ({height, width}: AvatarProps) => {
  return (
    <View>
      <Image
        style={{
          height: height,
          width: width,
          borderRadius: 100,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        alt="profile picture"
        source={{
          uri: 'https://approachableai.com/wp-content/uploads/2022/12/SDv2.1-Example.jpg',
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
