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
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import HomeIcon from '../../assets/homeicon.svg';
import Ready from '../../assets/readyinvesment.svg';
import BackButton from '../../assets/backbutton.svg';
import theme from '../../consts';
import Sound from 'react-native-sound';
export default function agriculture({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  return (
    <SafeAreaView style={styles.container}>
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
      <View
        style={{
          flex: 1,
          // height: 600 * theme.consts.BW,
          alignItems: 'center',
          // justifyContent: 'center',
          // borderWidth: 2,
        }}>
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
                fontWeight: 'bold',
                paddingBottom: 15,
                fontFamily: 'Gilroy-Bold',
              }}>
              {lang == 'ar' ? 'الزراعة' : 'AGRICULTURE'}
            </Animatable.Text>
            <Animatable.Text
              animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
              delay={800}
              style={{
                fontSize: 20,
                textAlign: lang == 'ar' ? 'right' : 'left',
                color: 'white',
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
                fontSize: 20,
                textAlign: lang == 'ar' ? 'right' : 'left',
                lineHeight: 24,
                color: '#f2f2f2',
                fontFamily:
                  lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                marginTop: 25,
              }}>
              {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
            </Animatable.Text>
          </Animatable.View>
          <Animatable.View style={{flexDirection: 'column', marginTop: 10}}>
            <Animatable.View animation={'fadeIn'} delay={800}>
              <Animatable.View animation={'slideInRight'} delay={800}>
                <TouchableOpacity
                  onPress={() => (setScreen(7), playSound())}
                  style={{
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                    marginLeft: 370 * theme.consts.BW,
                  }}>
                  <Image
                    source={require('../../assets/Links/ag1.jpg')}
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
                      {lang == 'ar' ? 'ماماز' : " MAMA'S"}
                    </Text>
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
                      {lang == 'ar' ? 'مشروم' : ' MUSHROOMS'}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
            <Animatable.View animation={'fadeIn'} delay={1100}>
              <Animatable.View animation={'slideInRight'} delay={1100}>
                <TouchableOpacity
                  onPress={() => (setScreen(8), playSound())}
                  style={{
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                    marginLeft: 200 * theme.consts.BW,
                  }}>
                  <Image
                    source={require('../../assets/Links/ag2.jpg')}
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
                      {lang == 'ar' ? 'بولا' : ' BULA'}
                    </Text>
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
                      {lang == 'ar' ? 'مشروم' : ' MUSHROOMS'}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
            <Animatable.View animation={'fadeIn'} delay={1400}>
              <Animatable.View animation={'slideInRight'} delay={1400}>
                <TouchableOpacity
                  onPress={() => (setScreen(9), playSound())}
                  style={{
                    flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                    marginLeft: 25 * theme.consts.BW,
                  }}>
                  <Image
                    source={require('../../assets/Links/ag3.jpg')}
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
                      {lang == 'ar' ? 'جوز فارم' : "JOE'S FARM"}
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
    </SafeAreaView>
  );
}

const Content = [
  {
    content:
      'Fiji’s virgin soils and tropical climate are ripe for opportunities in the domestic hotel industry and export markets. We are best known for sugar, fish, turmeric, taro, kava, noni, pawpaw and ginger.',
    content_ar:
      'أصبحت التربة البكر والمناخ االستوائي في فيجي مهيئين لفرص في القطاع الفندقي المحلي وأسواق التصدير شتهر بالسكر واألسماك والكركم والقلقاس و الكافا و النوني و البابا و الزنجبيل.',
  },
  {
    content2:
      'Fiji’s proximity to over 30 million consumers in the region and direct flight connectivity to the rest of the world, provide the opportunity to get the best agro-produce to your market.\nInvestment in this sector has been fruitful for many investors.',
    content2_ar:
      'تقترب فيجي من أكثر من 30 مليون مستهلك في المنطقة ولديها شبكة  طيران  مباشر  مع بقية العالم  مما يتيح فرصة الحصول على أفضل المنتجات الزراعية في السوق. يعد الأستثمار في هذا القطاع  مثمرا للعديد من المستثمرين .  بعض ً الأمثلة على  تجارب المستثمرين:',
  },
];
