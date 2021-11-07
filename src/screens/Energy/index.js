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
import theme from '../../consts';
import * as Animatable from 'react-native-animatable';
import HomeIcon from '../../assets/homeicon.svg';
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import Video from 'react-native-video';
import Sound from 'react-native-sound';
export default function Energy({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: '100%', height: '100%'}}>
        <View
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
        <View style={{flex: 1}}>
          <View
            style={[
              styles.viewRow,
              {flexDirection: lang == 'ar' ? 'row-reverse' : 'row'},
            ]}>
            <Animatable.View
              animation={'fadeIn'}
              delay={500}
              style={{
                width: 450,
                marginStart: lang == 'ar' ? 0 : 100,
                paddingStart: lang == 'ar' ? 0 : 50,
                paddingEnd: lang == 'ar' ? 50 : 0,
                marginEnd: lang == 'ar' ? 100 : 0,
              }}
              source={require('../../assets/backHome2.png')}>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 33,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  paddingStart: 10,
                  fontFamily: 'Gilroy-Bold',
                }}>
                {lang == 'ar' ? 'الطاقة' : 'ENERGY'}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  padding: 10,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
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
                  padding: 10,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                }}>
                {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  padding: 10,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                }}>
                {lang == 'ar' ? Content[2].content3_ar : Content[2].content3}
              </Animatable.Text>
            </Animatable.View>
            <Animatable.View
              animation={'fadeIn'}
              delay={500}
              style={{flexDirection: 'column', marginTop: 30}}>
              <Animatable.View animation={'slideInRight'} delay={800}>
                <TouchableOpacity
                  onPress={() => (setScreen(14), playSound())}
                  style={{
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                    marginLeft: 175 * theme.consts.BW,
                  }}>
                  <Image
                    source={require('../../assets/Links/energy1.png')}
                    style={{
                      width: 200 * theme.consts.BW,
                      height: 200 * theme.consts.BW,
                    }}
                  />
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: 200 * theme.consts.BW,
                      justifyContent: 'center',
                      alignItems: lang == 'ar' ? 'flex-end' : 'flex-start',
                      paddingStart: lang == 'ar' ? 0 : 20,
                    }}
                    source={
                      lang == 'ar'
                        ? require('../../assets/backgroundcategory3-ar.png')
                        : require('../../assets/backgroundcategory3.png')
                    }>
                    <Text
                      style={{
                        fontSize: 28,
                        paddingEnd: lang == 'ar' ? 20 : 0,
                        textAlign: lang == 'ar' ? 'right' : 'left',
                        color: 'white',
                        fontFamily:
                          lang == 'ar'
                            ? 'Montserrat-Arabic-Light'
                            : 'Gilroy-Regular',
                        lineHeight: 30,
                      }}>
                      {lang == 'ar'
                        ? 'شركة نوكورا\n فورست بيز'
                        : 'NUKURUA FOREST\nBASE COMPANY'}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
          </View>
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
      'We are climate champions–leading the charge towards a greener tomorrow. Across the islands, we are keen to pursue more sustainable energy options, as we make the transition to clean energy sources.',
    content_ar:
      'نحن أبطال المناخ-نقود المسيرة نحو الحفاظ على البيئة . عبر الجزر ، نحن حريصون على متابعة المزيد خيارات الطاقة المستدامة ، حيث نقوم بالانتقال إلى مصادر الطاقة النظيفة.',
  },
  {
    content2:
      'Currently, over 60 percent of electricity generated is from renewable energy sources such as hydro, biomass, wind, and solar. And we remain committed to increasing this to 100 percent by 2030.',
    content2_ar:
      ' حاليا   ، أكثر   من 60 في   المئة من الكهرباء المولدة من مصادر الطاقة المتجددة مثل الطاقة المائية والكتلة الحيوية وطاقة الرياح و شمسي . وما زلنا ملتزمين بزيادة هذا إلى 100 في المائة بحلول عام 2030.',
  },
  {
    content3:
      'We have an abundance of pristine renewable energy sources in Fiji and offer incentives for operations that support our diversification and climate ambitions.',
    content3_ar:
      'لدينا وفرة من مصادر الطاقة المتجددة الأصلية في وتقدم فيجي حوافز للعمليات التي تدعم أعمالنا التنويع و الطموحات المناخية.',
  },
];
