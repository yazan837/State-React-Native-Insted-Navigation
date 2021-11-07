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
export default function Manufactor({setScreen}) {
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
                  fontFamily: 'Gilroy-Bold',
                }}>
                {lang == 'ar' ? 'الصناعات التحولية' : 'MANUFACTURING'}
              </Animatable.Text>
              <Animatable.Text
                animation={lang == 'ar' ? 'slideInRight' : 'slideInLeft'}
                delay={800}
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  paddingTop: 10,
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
                  fontSize: 18,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 24,
                }}>
                {lang == 'ar' ? Content[1].content2_ar : Content[1].content2}
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
                  lineHeight: 24,
                }}>
                {lang == 'ar' ? Content[2].content3_ar : Content[2].content3}
              </Animatable.Text>
            </Animatable.View>
            <Animatable.View style={{flexDirection: 'column', marginTop: 25}}>
              <Animatable.View animation={'fadeIn'} delay={800}>
                <Animatable.View animation={'slideInRight'} delay={800}>
                  <TouchableOpacity
                    onPress={() => (setScreen(13), playSound())}
                    style={{
                      flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                      marginLeft: 200 * theme.consts.BW,
                    }}>
                    <Image
                      source={require('../../assets/Links/man2.jpg')}
                      style={{
                        width: 225 * theme.consts.BW,
                        height: 200 * theme.consts.BW,
                      }}
                      resizeMode="stretch"
                    />
                    <ImageBackground
                      style={{
                        width: lang == 'ar' ? '100%' : '80%',
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
                          ? 'نيو أورجانيك\nللأسمدة العضوية'
                          : 'NEW ORGANIC\nFERTILIZERS'}
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

const Content = [
  {
    content:
      'Fiji is rich in natural resources, giving us an advantage in the manufacturing supply chain.',
    content_ar:
      'تتميز فيجي بأنها مليئة بالموارد الطبيعية ، مما يعطينا األفضلية في سلسلة التوريد الخاصة بالصناعة.',
  },
  {
    content2:
      '\nFrom textiles, footwear, food processing, and beverages to tobacco and timber, we have identified new opportunities for exports, including organic agricultural products and sustainably sourced wood.',
    content2_ar:
      'بدءا من المنسوجات و الأحذية و صناعة الأغذية والمشروبات ً وصوالً إلى التبغ و الألواح  الخشبية، حددنا فرصا جديدة للصادرات بما في   ذلك ً المنتجات الزراعية العضوية واألخشاب ذات المصادر المستدامة.',
  },
  {
    content3:
      'Our global connectivity, quick turnaround,\nand skilled English-speaking workforce, make Fiji the best investment destination.\nTo meet our global climate commitments,\nour focus is on green manufacturing.',
    content3_ar:
      'إن االتصال العالمي والتغُير السريع و القوى العاملة الماهرة المتحدثة باللغة اإلنجليزية، تجعل من  فيجي أفضل وجهة للأستثمار . من أجل الوفاء بالتزاماتنا المتعلقة بالمناخ العالمي، ينصب تركيزنا على الصناعة الخضراء.',
  },
];
