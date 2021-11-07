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
import Gallery from 'react-native-photo-gallery';
import Sound from 'react-native-sound';
export default function agricultuer3({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 'first image',
      image: require('../../assets/Links/su1.jpg'),
      thumb: require('../../assets/Links/su1.jpg'),
    },
    {
      id: 'Second image',
      image: require('../../assets/Links/ag3.jpg'),
      thumb: require('../../assets/Links/ag3.jpg'),
    },
    {
      id: 'third image',
      image: require('../../assets/Links/su2.jpg'),
      thumb: require('../../assets/Links/su2.jpg'),
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
                {lang == 'ar' ? 'جوز فارم' : "JOE'S FARM"}
              </Animatable.Text>

              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  color: '#f2f2f2',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
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
                  marginTop: 25,
                  color: '#f2f2f2',
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
              source={require('../../assets/Links/ag3.jpg')}
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
      'The produce from Joe’s Farm is renowned for its uncompromising quality.\n\nFrom humble beginnings in\n1981, the company has\nbecome a vibrant operation\nengaged in the entire life\ncycle of fresh, frozen and\nprocessed food, liquor and\ngeneral groceries.',
    content_ar:
      'تشتهر محاصيل جوز فارم بجودتها التي لا مثيل لها . بدأنا مسيرتنا بمجهودات متواضعة عام 1981 ,ثم انطلقت الشركة في عالم الأعمال بكامل طاقتها لتندمج بذلك في تجارة الأغذية الطازجة و المجمدة والمصنعة اضافة الى المشروبات الكحولية و أغراض  البقالة العامة على مدرا دورة حياتها الأنتاجية ',
  },
  {
    content2:
      'They were seeking an investor\nto support their expansion plans in hydroponic farming.',
    content2_ar:
      'كانوا يبحثون عن مستثمر لدعم خططهم التوسعية في الزراعة المائية بدون تربة.',
  },
];
