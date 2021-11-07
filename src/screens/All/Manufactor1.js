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
import Gallery from 'react-native-photo-gallery';
import theme from '../../consts';
import Sound from 'react-native-sound';
export default function Manufactor1({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 0,
      image: require('../../assets/Links/man2.jpg'),
      thumb: require('../../assets/Links/man2.jpg'),
    },
    {
      id: 1,
      image: require('../../assets/Links/man1.png'),
      thumb: require('../../assets/Links/man1.png'),
    },

    // {
    //   id: 2,
    //   // image: require('../../assets/Links/man2.jpg'),
    //   // thumb: require('../../assets/Links/man2.jpg'),
    // },
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
            onPress={() => (setScreen(4), playSound())}
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
        <View style={{alignItems: 'center', flex: 1}}>
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
                  marginTop: 10,
                  lineHeight: 42,
                }}>
                {lang == 'ar'
                  ? 'نيو أورجانيك للأسمدة العضوية'
                  : 'NEW ORGANIC\nFERTILIZERS'}
              </Animatable.Text>

              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  marginTop: 15,
                  lineHeight: 30,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                }}>
                {lang == 'ar' ? Content[0].content_ar : Content[0].content}
              </Animatable.Text>
            </ImageBackground>
            <Animatable.View
              animation={lang == 'ar' ? 'slideInLeft' : 'slideInRight'}
              delay={800}>
              <Image
                source={require('../../assets/Links/man2.jpg')}
                style={{width: 700, height: 450}}
                resizeMode="cover"
              />
            </Animatable.View>
            {/* <Animatable.View
              animation={lang == 'ar' ? 'slideInLeft' : 'slideInRight'}
              delay={800}
              style={{
                height: 650 * theme.consts.BW,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Gallery data={data} resizeMode="cover" visible={true} />
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
      'A local agricultural firm, New Organic Fertilizers aims to\nexpand organic manure manufacturing in the tax-free zone of Viti Levu. Get involved as a joint venture business partner and become a partner in Fiji’s manufacturing success story.',
    content_ar:
      'تهدف شركة نيو أورجانيك لألسمدة العضوية -وهي شركة زراعية محلية- إلى التوسع في صناعة السماد العضوي في المنطقة المعفاة من الضرائب في فيتي ليفو. شارك الآن في مشروع تجاري مشترك و كن في قصة نجاح الصناعة في جزيرة فيجي. ',
  },
];
