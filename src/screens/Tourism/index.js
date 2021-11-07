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
import Sound from 'react-native-sound';
export default function Tourism({setScreen}) {
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
              }}>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 33,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  paddingBottom: 5,
                  // fontWeight: 'bold',
                  fontFamily: 'Gilroy-Bold',
                }}>
                {lang == 'ar' ? 'السياحة' : 'TOURISM'}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  color: '#f2f2f2',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
                  // marginTop: 15,
                }}>
                {lang == 'ar' ? Content[0].content_ar : Content[0].content}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  color: '#f2f2f2',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
                  // marginTop: 15,
                }}>
                {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
              </Animatable.Text>
            </Animatable.View>
            <Animatable.View style={{flexDirection: 'column', marginTop: 40}}>
              <Animatable.View animation={'fadeIn'} delay={800}>
                <Animatable.View animation={'slideInRight'} delay={800}>
                  <TouchableOpacity
                    onPress={() => (setScreen(10), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: 350 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/tor1.png')}
                      style={{
                        width: 170 * theme.consts.BW,
                        height: 170 * theme.consts.BW,
                      }}
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '70%',
                        height: 170 * theme.consts.BW,
                        justifyContent: 'center',
                        alignItems: lang == 'ar' ? 'flex-end' : 'flex-start',
                        paddingStart: lang == 'ar' ? 0 : 20,
                      }}
                      source={
                        lang == 'ar'
                          ? require('../../assets/backgroundcategory2-ar.png')
                          : require('../../assets/backgroundcategory2.png')
                      }>
                      <Text
                        style={{
                          fontSize: 28,
                          paddingEnd: lang == 'ar' ? 20 : 0,
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar'
                          ? 'شقق برايت\nستار'
                          : 'BRIGHT STAR\nAPARTMENTS'}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
              <Animatable.View animation={'fadeIn'} delay={1100}>
                <Animatable.View animation={'slideInRight'} delay={1100}>
                  <TouchableOpacity
                    onPress={() => (setScreen(11), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: 175 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/tor2.jpg')}
                      style={{
                        width: 170 * theme.consts.BW,
                        height: 170 * theme.consts.BW,
                      }}
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '70%',
                        height: 170 * theme.consts.BW,
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
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar' ? 'دينارو لاند' : ' DENARAU LAND'}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
              <Animatable.View animation={'fadeIn'} delay={1400}>
                <Animatable.View animation={'slideInRight'} delay={1400}>
                  <TouchableOpacity
                    onPress={() => (setScreen(12), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: 0 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/tor3.jpg')}
                      style={{
                        width: 170 * theme.consts.BW,
                        height: 170 * theme.consts.BW,
                      }}
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '70%',
                        height: 170 * theme.consts.BW,
                        justifyContent: 'center',
                        alignItems: lang == 'ar' ? 'flex-end' : 'flex-start',
                        paddingStart: lang == 'ar' ? 0 : 20,
                      }}
                      source={
                        lang == 'ar'
                          ? require('../../assets/backgroundcategory4-ar.png')
                          : require('../../assets/backgroundcategory4.png')
                      }>
                      <Text
                        style={{
                          fontSize: 28,
                          paddingEnd: lang == 'ar' ? 20 : 0,
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar'
                          ? 'فيساري الصناعية'
                          : 'VEISARI INDUSTRIAL'}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Animatable.View>
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
      'A tropical paradise with rich cultural diversity,\nFiji is a gem on the global tourism map.',
    content_ar:
      'فيجي جنة استوائية ذات تنوع ثقافي كبير ، وتظهر متلألئة على خريطة السياحة العالمية .',
  },
  {
    content2:
      '\nRecognizing the major role of the sector, the Fijian Government has introduced several tax incentives that have created opportunities for those operating in the luxury and sustainable tourism sphere. Our Care Fiji Commitment–recognised by the World Travel and Tourism Council–provides destination-wide assurance that Fiji is\nready to welcome back visitors. It is commitment to the health and\nsafety of travellers to Fiji, and their \ncommitment to travel responsibly in Fiji.',
    content2_ar:
      'إدراكا للدور الرئيسي للقطاع، فرضت حكومة فيجي العديد من الحوافز ً الضريبية التي خلقت فرصا لأولائك الذين يعملون في مجال السياحة ًالترفيهية و المستدامة . يوفر ألتزام فيجي للرعاية لدينا المعترف به من قبل المجلس العالمي للسفر و السياحة ضمانا" على  مستوى جهة الوصول بأن فيجي مستعدة لأستقبال الزوار مرة أخرى . أنه ألتزام بالحفاظ على صحة المسافرين الى فيجي و سلامتهم , وعليهم أن يتحملو   مسؤولية السفر الى فيجي',
  },
];
