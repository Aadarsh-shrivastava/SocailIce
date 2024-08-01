import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Gallery from '../../components/Gallery';
import SearchBar from '../../components/SearchBar';

const ExploreScreen = () => {
  const [images, setImages] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/?client_id=MZ8ZRxmsXkaLHLLRH04EjlIfLrq88X35EzIDaFt0yYw',
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`,
          );
        }

        const data = await response.json();

        let urls = [];
        for (let i = 0; i < data.length; i++) {
          urls.push({postImage: data[i].urls.raw});
        }
        setImages(urls);
      } catch (err: any) {
        setError(err.message);
        console.error('Fetch error:', err);
      }
    };

    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        images.length > 0 && (
          <View>
            <SearchBar />
            <Gallery data={images} selectImage={() => {}} />
          </View>
        )
      )}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});
