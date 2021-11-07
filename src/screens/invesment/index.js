import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import HomeIcon from '../../assets/homeicon.svg';
import Logo from '../../assets/FujiLogo.svg';
import TextInvest from '../../assets/invesmenttext.svg';
import QR from '../../assets/qrcode.svg';
import BackButton from '../../assets/backbutton.svg';
import Sound from 'react-native-sound';
export default function Invesment({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: '100%', height: '100%'}}>
        <Animatable.View
          animation={'fadeInDown'}
          delay={1000}
          style={{
            flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => (setScreen(1), playSound())}
            style={{
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {lang == 'ar' ? (
              <Image
                source={require('../../assets/backar.png')}
                resizeMode="center"
                style={{width: 80, height: 80}}
              />
            ) : (
              <BackButton style={{width: 80, height: 80}} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (setScreen(15), playSound())}
            style={{
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {lang == 'ar' ? (
              <Image
                source={require('../../assets/mainar.png')}
                style={{width: 90, height: 90}}
                resizeMode="center"
              />
            ) : (
              <HomeIcon style={{width: 80, height: 80}} />
            )}
          </TouchableOpacity>
        </Animatable.View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animatable.View animation={'fadeInDown'} delay={800}>
            <Logo style={{width: 600, height: 160}} />
          </Animatable.View>
          <View style={{margin: 20, marginTop: 40}}>
            <Animatable.Text
              animation={'fadeInDown'}
              delay={1000}
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                fontFamily:
                  lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
              }}>
              {lang == 'ar'
                ? 'هل أنت مستعد لتنمية استثماراتك في المحيط ؟'
                : ' Are you ready to grow your investments in the Pacific ?'}
            </Animatable.Text>
            {/* <TouchableOpacity
              onPress={() =>
                Linking.openURL('http://www.investmentfiji.org.fj/')
              }> */}
            <Animatable.Text
              animation={'fadeInDown'}
              delay={1000}
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                fontFamily:
                  lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
              }}>
              {lang == 'ar'
                ? 'امسح رمز االستجابة السريعة ضوئيا لزيارة موقعناً:(www.investmentfiji.org.fj) '
                : 'Scan the QR code to visit our website (www.investmentfiji.org.fj)'}
            </Animatable.Text>
            {/* </TouchableOpacity> */}
            <Animatable.Text
              animation={'fadeInDown'}
              delay={1000}
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                fontFamily:
                  lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
              }}>
              {lang == 'ar'
                ? 'واكتشف كيف يمكنك أن تكون جزءا" من نجاحنا '
                : 'and discover how you can be part of our success.'}
            </Animatable.Text>
          </View>
          <Animatable.View
            animation={'fadeInDown'}
            delay={1200}
            style={{marginTop: 40}}>
            <Image
              source={require('../../assets/mmmm.png')}
              resizeMode="center"
              style={{width: 500, height: 200}}
            />
            {/* <QR   /> */}
          </Animatable.View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
