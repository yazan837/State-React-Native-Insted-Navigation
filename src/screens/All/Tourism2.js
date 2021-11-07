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
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import Gallery from 'react-native-photo-gallery';
import Sound from 'react-native-sound';
export default function Toursism2({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 0,
      image: require('../../assets/Links/DN2.jpg'),
      thumb: require('../../assets/Links/DN2.jpg'),
    },
    {
      id: 1,
      image: require('../../assets/Links/DN3.png'),
      thumb: require('../../assets/Links/DN3.png'),
    },
    {
      id: 2,
      image: require('../../assets/Links/tor2.jpg'),
      thumb: require('../../assets/Links/tor2.jpg'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => (setScreen(3), playSound())}
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
              <BackButton style={{width: 70, height: 70}} />
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
              <HomeIcon style={{width: 70, height: 70}} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Animatable.View
            animation={'fadeIn'}
            delay={500}
            style={[
              styles.viewRow,
              {flexDirection: lang == 'ar' ? 'row-reverse' : 'row'},
            ]}>
            <ImageBackground
              style={{
                width: 450,
                height: 450,
                paddingStart: lang == 'ar' ? 0 : 125,
                paddingEnd: lang == 'ar' ? 125 : 0,
              }}
              source={
                lang == 'ar'
                  ? require('../../assets/allbackground-ar.png')
                  : require('../../assets/allbackground.png')
              }>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 33,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily: 'Gilroy-Bold',
                  marginTop: 10,
                  lineHeight: 42,
                }}>
                {lang == 'ar' ? 'دينارو لاند' : 'DENARAU LAND'}
              </Animatable.Text>

              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  lineHeight: 24,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  marginTop: 15,
                }}>
                {lang == 'ar' ? Content[0].content_ar : Content[0].content}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  lineHeight: 24,
                  marginTop: 25,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                }}>
                {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
              </Animatable.Text>
              <TouchableOpacity
              // onPress={() => Linking.openURL('https://www.tappoo.com.fj/')}
              >
                <Animatable.Text
                  animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                  delay={800}
                  style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: lang == 'ar' ? 'right' : 'left',
                    fontFamily:
                      lang == 'ar'
                        ? 'Montserrat-Arabic-Light'
                        : 'Gilroy-Regular',
                    lineHeight: 24,
                  }}>
                  {lang == 'ar' ? Content[2].content3_ar : Content[2].content3}
                </Animatable.Text>
              </TouchableOpacity>
            </ImageBackground>
            <Animatable.View
              animation={lang == 'ar' ? 'slideInLeft' : 'slideInRight'}
              delay={800}
              style={{
                height: 600,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Gallery data={data} resizeMode="cover" />
            </Animatable.View>
          </Animatable.View>
        </View>
        <TouchableOpacity
          onPress={() => (setScreen(6), playSound())}
          style={{
            width: 150,
            height: 150,
            alignSelf: lang == 'ar' ? 'flex-start' : 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {lang == 'ar' ? (
            <Image
              source={require('../../assets/investar.png')}
              resizeMode="center"
              style={{width: 90, height: 90}}
            />
          ) : (
            <Ready style={{width: 80, height: 80}} />
          )}
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const Content = [
  {
    content:
      'Denarau Land by Tappoo is the only undeveloped lot in the\nheart of Denarau, the beating heart of Fiji Tourism with its\npalm trees, sandy beaches, and world-class facilities.',
    content_ar:
      'دينارو لاند في  مدينة تابو هو المكان الوحيد غير المتطور في قلب  دينارو ، و التي تعد القلب النابض للسياحة في فيجي بفضل أشجار النخيل  ُ والشواطئ الرملية والمرافق ذات المستوى العالمي.',
  },
  {
    content2:
      'Located right next to Port\nDenarau Retail Centre\nand Marina, it is a rare\nopportunity to tap into Fiji’s\nnext phase of lucrative development.',
    content2_ar:
      'تقع بجوار مركز بورت دينارو للبيع بالتجزئة و المارينا، وهي فرصة نادرة لالستفادة من المرحلة التالية  من التنمية المربحة في فيجي.',
  },
  {
    content3: 'For more information:\nwww.tappoo.com.fj',
    content3_ar:
      'لمزيد من المعلومات، ُيرجى زيارة الموقع الألكتروني :\nwww.tappoo.com.fj',
  },
];
