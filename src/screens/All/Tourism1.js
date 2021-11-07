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
export default function Toursism1({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 0,
      image: require('../../assets/Links/BR2.png'),
      thumb: require('../../assets/Links/BR2.png'),
    },
    {
      id: 1,
      image: require('../../assets/Links/BR3.png'),
      thumb: require('../../assets/Links/BR3.png'),
    },
    {
      id: 2,
      image: require('../../assets/Links/tor1.png'),
      thumb: require('../../assets/Links/tor1.png'),
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
                {lang == 'ar' ? 'شقق برايت ستار' : 'BRIGHT STAR APARTMENTS'}
              </Animatable.Text>

              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 22,
                  marginTop: 10,
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
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 22,
                }}>
                {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
              </Animatable.Text>
              <Animatable.Text
                onPress={() =>
                  Linking.openURL('https://www.tappoo.com.fj/brightstar/')
                }
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
                }}>
                {lang == 'ar' ? Content[2].content3_ar : Content[2].content3}
              </Animatable.Text>
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
            justifyContent: 'center',
            alignItems: 'center',
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
      'Nestled in the heart of Suva City,\nthe South Pacific’s premier capital city, Bright Star Apartments is a world-class property offering \nluxury and security.',
    content_ar:
      'تقع  شقق بريت ستار في قلب مدينة سوفا ، العاصمة الرئيسية لجنوب المحيط الهادئ، وتتميز بطرازها العالمي حيث توفر الرفاهية الأمان',
  },
  {
    content2:
      '\nTwelve exclusive freehold strata apartments are now for sale for potential investors interested in the\nonly 5-star fully furnished \napartments in Suva in a quiet neighborhood and with all the convenience of home.',
    content2_ar:
      'عرض الآن  للبيع  بشكل حصري اثنتا عشرة شقة  بميزة الملكية الحرة  تناسب المستثمرين المحتملين المهتمين   فقط بامتالك شقق من  فئة الخمس نجوم المفروشة بالكامل في مدينة سوفا حيث األجواء الهادئة وتوفر جميع وسائل الراحة المنزلية.',
  },
  {
    content3: 'For more information:\nwww.tappoo.com.fj/brightstar',
    content3_ar:
      'لمزيد من المعلومات، ُيرجى زيارة الموقع الألكتروني :\nwww.tappoo.com.fj/brightstar',
  },
];
