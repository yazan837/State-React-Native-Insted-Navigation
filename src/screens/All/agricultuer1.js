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
import Gallery from 'react-native-photo-gallery';
import * as Animatable from 'react-native-animatable';
import HomeIcon from '../../assets/homeicon.svg';
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import Sound from 'react-native-sound';
export default function agricultuer1({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  const data = [
    {
      id: 0,
      image: require('../../assets/Links/th1.jpg'),
      thumb: require('../../assets/Links/th1.jpg'),
    },
    {
      id: 1,
      image: require('../../assets/Links/ag1.jpg'),
      thumb: require('../../assets/Links/ag1.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/Links/th3.jpg'),
      thumb: require('../../assets/Links/th3.jpg'),
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
        <View
          style={{
            flex: 1,
            alignItems: 'center',
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
                {lang == 'ar' ? 'ماماز' : 'MAMA’S'}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 33,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily: 'Gilroy-Bold',
                }}>
                {lang == 'ar' ? 'مشروم' : 'MUSHROOMS'}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  color: '#f2f2f2',
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
                  color: '#f2f2f2',
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
              source={require('../../assets/Links/ag1.jpg')}
              style={{width: 500, height: 375}}
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
      'Mama’s Mushrooms was set\nup to help empower women\nin rural Fiji. This home-grown\nbusiness is now gearing up to\nopen more farms, grow\nnew produce and develop\nagri-tourism.',
    content_ar:
      'تأسس هذا المشروع بهدف المساعدة في تمكين المرأة في ريف فيجي . يستعد هذا النشاط التجاري المحلي اآلن لفتح المزيد من المزارع إلى تطوير السياحة الزراعية. وزراعة محاصيل جديدة إضافة',
  },
  {
    content2:
      'They were seeking investors\nto support their vision of\nsocial development\nand help them expand their offering.',
    content2_ar:
      'كانوا يبحثون عن مستثمرين لدعم رؤيتهم للتنمية االجتماعية ومساعدتهم على التوسع فيما يقدمونه من منتجات.',
  },
];
