import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Gallery from '../../components/Gallery';
import SearchBar from '../../components/SearchBar';

const ExploreScreen = () => {
  const [images, setImages] = useState<any>();
  useEffect(() => {
    axios(
      'https://api.unsplash.com/photos/?client_id=MZ8ZRxmsXkaLHLLRH04EjlIfLrq88X35EzIDaFt0yYw',
    ).then(response => {
      let urls = [];
      for (let i = 0; i < response.data.length; i++) {
        urls.push({postImage: response.data[i].urls.raw});
      }
      setImages(urls);
    });
  }, []);
  return (
    <View>
      {images && (
        <View>
          <SearchBar />
          <Gallery data={[...images, ...images]} />
        </View>
      )}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
