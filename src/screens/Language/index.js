import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Animated,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../../redux/actions/homeAction';
import NavigationService from '../../navigation/NavigationService';
import Title from '../../assets/title.svg';
import LanEn from '../../assets/lan_en.svg';
import LanAr from '../../assets/lan_ar.svg';
import Video from 'react-native-video';
import Sound from 'react-native-sound';
import * as Animatable from 'react-native-animatable';
export default function Language({setScreen}) {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{}} resizeMode="cover">
        <View style={styles.viewRow}>
          <View style={styles.block}>
            <View
              // useNativeDriver={true}
              // animation="fadeIn"
              // delay={1}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginStart: -475,
              }}>
              <Image
                source={require('../../assets/MainLogoPage.png')}
                style={{width: 1250, height: 1250}}
                resizeMode="contain"
              />
              {/* <Title style={{with: 600, height: 600}} /> */}
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => (
                  setScreen(0), dispatch(setLanguage('en')), playSound()
                )}
                style={styles.button}
                activeOpacity={0.8}>
                <LanEn style={{width: 120, height: 100}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => (
                  setScreen(0), dispatch(setLanguage('ar')), playSound()
                )}>
                <Image
                  source={require('../../assets/lanar.png')}
                  style={{
                    width: 120,
                    height: 100,
                  }}
                  resizeMode="contain"
                />
                {/* <LanAr
                  style={{
                    width: 100,
                    height: 100,
                  }}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
