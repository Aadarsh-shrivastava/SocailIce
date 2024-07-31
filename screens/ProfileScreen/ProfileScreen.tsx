import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Avatar from './components/Avatar';
import Stats from './components/Stats';
import Gallery from '../../components/Gallery';
import ButtonRow from './components/ButtonRow';
import Bio from './components/Bio';
import {useTheme} from '../../contexts/themeContext';
import {strings} from '../../constants/texts';
import {darkTheme} from '../../theme';
import {useAuth} from '../../contexts/authContext';
import ProfileHeader from './components/ProfileHeader';
import {StackScreenProps} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {galleryData} from '../../data/GalleryData';
type ProfileScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  'ProfileScreen'
>;
const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const {theme, toggleTheme} = useTheme();
  const {isLoggedIn, signIn, signOut} = useAuth();
  return (
    <View>
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
            styles(theme).butons,
            {backgroundColor: theme.colors.background},
          ]}>
          <ButtonRow />
        </View>
        <View style={{margin: theme.spacing.s}}>
          <Gallery data={galleryData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = (props: any) =>
  StyleSheet.create({
    butons: {
      marginVertical: 30,
      marginHorizontal: 10,
      flexDirection: 'row',
    },
  });
