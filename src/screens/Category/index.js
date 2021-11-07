import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import theme from '../../consts';
import {useSelector} from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import * as Animatable from 'react-native-animatable';
import HomeIcon from '../../assets/homeicon.svg';
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import Video from 'react-native-video';
import Sound from 'react-native-sound';
export default function Category({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={[{width: '100%', height: '100%'}]}>
        <View
          style={{
            flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => (setScreen(0), playSound())}
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
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={[
              styles.viewRow,
              {
                flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
              },
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
                animation={'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 36,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  padding: 10,
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Bold',
                  lineHeight: 40,
                  marginTop: 48,
                }}>
                {lang == 'ar' ? 'فرص الاستثمار' : 'INVESTMENT OPPORTUNITIES'}
              </Animatable.Text>
              <Animatable.Text
                animation={'slideInLeft'}
                delay={800}
                style={{
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  padding: 10,
                  marginTop: 15,
                  color: '#f2f2f2',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                }}>
                {lang == 'ar'
                  ? 'اكتشف الفرص الرائعة في\nقطاعتنا السريعة النمو.'
                  : 'Discover exciting opportunities\nin our fast-growing sectors.'}
              </Animatable.Text>
            </Animatable.View>
            <Animatable.View
              style={{
                flexDirection: 'column',
              }}>
              <Animatable.View animation={'fadeIn'} delay={800}>
                <Animatable.View animation={'slideInRight'} delay={800}>
                  <TouchableOpacity
                    onPress={() => (setScreen(2), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: 300 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/c1.jpg')}
                      style={{
                        width: 170 * theme.consts.BW,
                        height: 170 * theme.consts.BW,
                      }}
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '65%',
                        height: 170 * theme.consts.BW,
                        justifyContent: 'center',
                        alignItems: lang == 'ar' ? 'flex-end' : 'flex-start',
                        paddingStart: lang == 'ar' ? 0 : 20,
                      }}
                      resizeMode="stretch"
                      source={
                        lang == 'ar'
                          ? require('../../assets/backgroundcategory1-ar.png')
                          : require('../../assets/backgroundcategory1.png')
                      }>
                      <Text
                        style={{
                          fontSize: 33,
                          paddingEnd: lang == 'ar' ? 20 : 0,
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar' ? 'الزراعة' : 'AGRICULTURE'}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
              <Animatable.View animation={'fadeIn'} delay={1100}>
                <Animatable.View animation={'slideInRight'} delay={1100}>
                  <TouchableOpacity
                    onPress={() => (setScreen(3), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: 130 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/c2.jpg')}
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
                          fontSize: 33,
                          paddingEnd: lang == 'ar' ? 20 : 0,
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar' ? 'السياحة' : 'TOURISM'}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
              <Animatable.View animation={'fadeIn'} delay={1400}>
                <Animatable.View animation={'slideInRight'} delay={1400}>
                  <TouchableOpacity
                    onPress={() => (setScreen(4), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: -40 * theme.consts.BW,
                    }}>
                    <Image
                      animation={'slideInRight'}
                      delay={800}
                      source={require('../../assets/Links/c3.jpg')}
                      style={{
                        width: 170 * theme.consts.BW,
                        height: 170 * theme.consts.BW,
                      }}
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '75%',
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
                          fontSize: 33,
                          paddingEnd: lang == 'ar' ? 20 : 0,
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar' ? 'الصناعة' : 'MANUFACTURING'}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
              <Animatable.View animation={'fadeIn'} delay={1700}>
                <Animatable.View animation={'slideInRight'} delay={1700}>
                  <TouchableOpacity
                    onPress={() => (setScreen(5), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: -210 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/c4.jpg')}
                      style={{
                        width: 170 * theme.consts.BW,
                        height: 170 * theme.consts.BW,
                      }}
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '62%',
                        height: 170 * theme.consts.BW,
                        justifyContent: 'center',
                        alignItems: lang == 'ar' ? 'flex-end' : 'flex-start',
                        paddingStart: lang == 'ar' ? 0 : 20,
                      }}
                      resizeMode="stretch"
                      source={
                        lang == 'ar'
                          ? require('../../assets/backgroundcategory4-ar.png')
                          : require('../../assets/backgroundcategory4.png')
                      }>
                      <Text
                        style={{
                          fontSize: 33,
                          paddingEnd: lang == 'ar' ? 20 : 0,
                          textAlign: 'center',
                          color: 'white',
                          fontFamily:
                            lang == 'ar'
                              ? 'Montserrat-Arabic-Light'
                              : 'Gilroy-Regular',
                        }}>
                        {lang == 'ar' ? 'الطاقة' : 'ENERGY'}
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
