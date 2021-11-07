import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Gallery from 'react-native-photo-gallery';
import HomeIcon from '../../assets/homeicon.svg';
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import theme from '../../consts';
import Sound from 'react-native-sound';
export default function Energy1({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 0,
      image: require('../../assets/Links/energy1.png'),
      thumb: null,
    },
    {
      id: 1,
      image: null,
      thumb: null,
    },
    {
      id: 2,
      image: null,
      thumb: null,
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
            onPress={() => (setScreen(5), playSound())}
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
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
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
                  fontSize: 33,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily: 'Gilroy-Bold',
                  flexDirection: 'row',
                  marginTop: 10,
                  lineHeight: 42,
                }}>
                {lang == 'ar'
                  ? 'شركة نوكورا\n فورست بيز'
                  : 'NUKURUA FOREST\nBASE COMPANY'}
              </Animatable.Text>

              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  lineHeight: 26,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  marginTop: 15,
                }}>
                {lang == 'ar' ? Content[0].content_ar : Content[0].content}
              </Animatable.Text>
            </ImageBackground>
            <Animatable.View
              animation={lang == 'ar' ? 'slideInLeft' : 'slideInRight'}
              delay={800}>
              <Image
                source={require('../../assets/Links/energy1.png')}
                style={{width: 700, height: 450}}
                resizeMode="cover"
              />
            </Animatable.View>
            {/* <Animatable.View
              animation={'slideInRight'}
              delay={800}
              style={{
                height: 800,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Gallery data={data} resizeMode="center" />
            </Animatable.View> */}
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
      'Nukurua Forest Base\nCompany has identified 259\nacres of mahogany waste\nas having the potential for conversion into biomass.\nYou can partner with them\nand support a responsible\nand sustainable energy\ntransition for Fiji. ',
    content_ar:
      'عملت شركة نوكورا فورست بيز على تحديد 259 فداناً من نفايات الماهوجني، حيث إن  لديها اإلمكانيات لتحويلها إلى كتلة حيوية . يمكنك أن تشاركهم و تدعم انتقال الطاقة المسؤول و المستدام إلى جزيرة فيجي.',
  },
  {
    content2:
      'Comprising two 5-acre plots and no building restrictions, it is a golden investment opportunity for your next multi-purpose  development.',
    content2_ar:
      ' تتألف من قطعتي أرض بمساحة 5 أفدنة وبدون قيود مفروضة على البناء، لذلك؛ فهي تمثل فرصة استثمارية ذهبية من أجل توسعك التالي المتعدد الأغراض.',
  },
];
