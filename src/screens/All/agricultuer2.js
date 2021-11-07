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
import HomeIcon from '../../assets/homeicon.svg';
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import Video from 'react-native-video';
import Sound from 'react-native-sound';
import Gallery from 'react-native-photo-gallery';
export default function agricultuer2({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 'first image',
      index: 0,
      image: require('../../assets/Links/bl1.jpg'),
      thumb: require('../../assets/Links/bl1.jpg'),
    },
    {
      id: 'Second image',
      index: 1,
      image: require('../../assets/Links/bl2.jpg'),
      thumb: require('../../assets/Links/bl2.jpg'),
    },
    {
      id: 'third image',
      index: 2,
      image: require('../../assets/Links/ag2.jpg'),
      thumb: require('../../assets/Links/ag2.jpg'),
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
            onPress={() => (setScreen(2), playSound())}
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
                paddingStart: lang == 'ar' ? 0 : 125,
                width: 450,
                height: 450,
                paddingEnd: lang == 'ar' ? 115 : 0,
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
                {lang == 'ar' ? 'بولا مشروم' : 'BULA MUSHROOM'}
              </Animatable.Text>

              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
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
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  marginTop: 25,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
                }}>
                {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
              </Animatable.Text>
            </ImageBackground>

            {/* <Animatable.Image
              animation={'slideInRight'}
              delay={800}
              source={require('../../assets/Links/ag2.png')}
              style={{width: 500, height: 350}}
              resizeMode="stretch"
            /> */}
            <Animatable.View
              animation={lang == 'ar' ? 'slideInLeft' : 'slideInRight'}
              delay={800}
              style={{
                height: 550,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Gallery data={data} backgroundColor="#fff" resizeMode="cover" />
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
      'The owners of Bula Mushroom\ncultivate mushrooms in\ntemperature-controlled cooler\ncontainers. They are now\nconsidered as leading experts\nin implementing modern\nagricultural techniques.',
    content_ar:
      'يزرع أصحاب مشروع بوال مشروم عش الغراب في حاويات تبريد  يمكن التحكم في درجة حرارتها .  ُيعدون الأن خبراء رائدين في تطبيق التقنيات الزراعية الحديثة . تأسس هذا المشروع بهدف المساعدة في تمكين المرأة في ريف فيجي . يستعد هذا النشاط التجاري المحلي الأن لفتح المزيد من المزارع إلى تطوير السياحة الزراعية . وزراعة محاصيل جديدة إضافة',
  },
  {
    content2:
      'They were seeking a join\nventure partner to help\nexpand their mushroom\nfarming plans.',
    content2_ar:
      'كانوا يبحثون عن شريك في مشروع مشترك ليساعدهم على توسيع خططهم لزراعة الفطر.',
  },
];
