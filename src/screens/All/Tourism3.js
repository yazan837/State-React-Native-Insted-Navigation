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
import Video from 'react-native-video';
import Gallery from 'react-native-photo-gallery';
import Sound from 'react-native-sound';

export default function Toursism3({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 'first image',
      image: require('../../assets/Links/c2.jpg'),
      thumb: require('../../assets/Links/c2.jpg'),
    },
    {
      id: 'Second image',
      image: require('../../assets/Links/tor3.jpg'),
      thumb: require('../../assets/Links/tor3.jpg'),
    },
    {
      id: 'third image',
      image: require('../../assets/Links/tor4.jpg'),
      thumb: require('../../assets/Links/tor4.jpg'),
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Animatable.View
            animation={'fadeIn'}
            delay={500}
            style={[
              styles.viewRow,
              {flexDirection: lang == 'ar' ? 'row-reverse' : 'row'},
            ]}>
            <ImageBackground
              style={{
                paddingStart: lang == 'ar' ? 0 : 125,
                paddingEnd: lang == 'ar' ? 125 : 0,
                width: 450,
                height: 450,
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
                  fontSize: 29,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily: 'Gilroy-Bold',
                  marginTop: 10,
                  lineHeight: 42,
                }}>
                {lang == 'ar' ? 'فيساري الصناعية' : 'VEISARI INDUSTRIAL'}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  marginTop: 15,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
                }}>
                {lang == 'ar' ? Content[0].content_ar : Content[0].content}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  marginTop: 25,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
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
                    marginTop: 10,
                    lineHeight: 24,
                    fontFamily:
                      lang == 'ar'
                        ? 'Montserrat-Arabic-Light'
                        : 'Gilroy-Regular',
                  }}>
                  {lang == 'ar' ? Content[2].content3_ar : Content[2].content3}
                </Animatable.Text>
              </TouchableOpacity>
            </ImageBackground>

            {/* <Animatable.Image
              animation={'slideInRight'}
              delay={800}
              source={require('../../assets/Links/tor3.png')}
              style={{width: 500, height: 350}}
              resizeMode="stretch"
            /> */}
            <Animatable.Image
              animation={lang == 'ar' ? 'slideInLeft' : 'slideInRight'}
              delay={800}
              source={require('../../assets/Links/tor3.jpg')}
              style={{width: 700, height: 450}}
              resizeMode="cover"
            />
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
      'Just minutes away from South\nPacific’s capital city Suva,\nVeisari Industrial is a 10.6-acre prime plot of freehold land for potential commercial, industrial and\nmulti-residential investors.',
    content_ar:
      'تقع فيساري الصناعية على ُ بعد دقائق فقط من مدينة سوفا عاصمة جنوب المحيط الهادئ  ، وهي عبارة عن قطعة أرض رئيسية تبلغ مساحتها 10.6 أفدنة من الأراضي  ذات التملك الحر للمستثمرين المحتملين التجاريين و الصناعيين والمشروعات السكنية المتعددة.',
  },
  {
    content2:
      'Comprising two 5-acre plots and no building restrictions, it is a golden investment opportunity for your next multi-purpose development.',
    content2_ar:
      ' تتألف من قطعتي أرض بمساحة 5 أفدنة وبدون قيود مفروضة على البناء ، لذلك فهي تمثل فرصة استثمارية ذهبية من أجل توسعك التالي المتعدد الأغراض.',
  },
  {
    content3: 'For more information:\nwww.tappoo.com.fj',
    content3_ar:
      'لمزيد من المعلومات  ،   ُيرجى زيارة الموقع الألكتروني :\nwww.tappoo.com.fj',
  },
];
