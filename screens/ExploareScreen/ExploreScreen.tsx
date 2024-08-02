import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Gallery from '../../components/Gallery';
import SearchBar from '../../components/SearchBar';
import {Theme, useTheme} from '../../contexts/themeContext';

const ExploreScreen = () => {
  const [images, setImages] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const {theme, toggleTheme} = useTheme();
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
    <View style={styles(theme).container}>
      {error ? (
        <Text style={styles(theme).errorText}>Error: {error}</Text>
      ) : (
        images.length > 0 && (
          <View
            style={{
              width: '100%',
              margin: theme.spacing.l,
              backgroundColor: theme.colors.background,
            }}>
            {/* <SearchBar /> */}
            <Gallery data={images} />
          </View>
        )
      )}
    </View>
  );
};

export default ExploreScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    errorText: {
      color: 'red',
      fontSize: 18,
      textAlign: 'center',
    },
  });
