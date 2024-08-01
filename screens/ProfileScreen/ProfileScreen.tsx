import {
  Alert,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Avatar from './components/Avatar';
import Stats from './components/Stats';
import Gallery from '../../components/Gallery';
import ButtonRow from './components/ButtonRow';
import Bio from './components/Bio';
import {Theme, useTheme} from '../../contexts/themeContext';
import {strings} from '../../constants/texts';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {galleryData} from '../../data/GalleryData';
import FullDisplayCard from '../../components/FullDisplayCard';
import ProfileHeader from './components/ProfileHeader';

type ProfileScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  'ProfileScreen'
>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const {theme} = useTheme();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activePost, setActivePost] = useState<{url: string; caption: string}>({
    url: '',
    caption: '',
  });

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalActive}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
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

      <ProfileHeader
        username={'Aadarsh07'}
        onPress={() => {
          navigation.navigate('SettingScreen');
        }}
      />

      <ScrollView style={{backgroundColor: theme.colors.background}}>
        <Avatar height={5 * theme.spacing.l} width={5 * theme.spacing.l} />
        <Bio />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: theme.spacing.s,
            marginVertical: theme.spacing.m,
          }}>
          <Stats statName={strings.POSTS} statValue="100" />
          <Stats statName={strings.FOLLOWERS} statValue="100" />
          <Stats statName={strings.FOLLOWING} statValue="100" />
        </View>
        <View
          style={[
            styles(theme).buttons,
            {backgroundColor: theme.colors.background},
          ]}>
          <ButtonRow />
        </View>
        <View style={{margin: theme.spacing.s}}>
          <Gallery
            data={galleryData}
            selectImage={(item: {url: string; caption: string}) => {
              setActivePost(item);
              setIsModalActive(true);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    buttons: {
      marginVertical: 30,
      marginHorizontal: 10,
      flexDirection: 'row',
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
