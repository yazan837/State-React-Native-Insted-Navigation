import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import AnimateNumber from 'react-native-animate-number';
import * as Animatable from 'react-native-animatable';
import HomeIcon from '../../assets/homeicon.svg';
import NextIcon from '../../assets/nexticon.svg';
import Sound from 'react-native-sound';
import theme from '../../consts';
export default function Home({setScreen}) {
  const lang = useSelector(state => state.home.language);
  const sound = new Sound('preview.mp3', Sound.MAIN_BUNDLE);
  playSound = () => {
    sound.play(() => sound.reset());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover">
        <TouchableOpacity
          onPress={() => (setScreen(15), playSound())}
          style={{
            width: 150,
            height: 150,
            alignSelf: lang == 'ar' ? 'flex-start' : 'flex-end',
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
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={[
              styles.viewRow,
              {flexDirection: lang == 'ar' ? 'row-reverse' : 'row'},
            ]}>
            <Animatable.View
              animation={'fadeInLeft'}
              delay={800}
              style={{height: 200}}>
              <ImageBackground
                style={{
                  width: 480,
                  height: 215,
                  justifyContent: 'center',
                  marginBottom: 25,
                  paddingStart: lang == 'ar' ? 0 : 150,
                  paddingEnd: lang == 'ar' ? 150 : 0,
                }}
                source={
                  lang == 'ar'
                    ? require('../../assets/backHome2-ar.png')
                    : require('../../assets/backHome2.png')
                }>
                <Animatable.Text
                  animation={'slideInLeft'}
                  delay={300}
                  style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: lang == 'ar' ? 'right' : 'left',
                    padding: 8,
                    fontFamily:
                      lang == 'ar'
                        ? 'Montserrat-Arabic-Light'
                        : 'Gilroy-Regular',
                    lineHeight: 26,
                    marginTop: -20,
                  }}>
                  {lang == 'ar'
                    ? ' نحن شعب يعيش على جزيرة ولديه\n أهداف  عالمية  كبيرة.'
                    : 'We are  an  island  nation \nwith great global ambitions.'}
                </Animatable.Text>
                <Animatable.Text
                  delay={300}
                  animation={'slideInLeft'}
                  style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: lang == 'ar' ? 'right' : 'left',
                    padding: 8,
                    marginTop: 10,
                    fontFamily:
                      lang == 'ar'
                        ? 'Montserrat-Arabic-Light'
                        : 'Gilroy-Regular',
                    lineHeight: 25,
                  }}>
                  {lang == 'ar'
                    ? 'بوصفنا  مركزا  للمحيط \nالهادئ ، فإننا  نعد  بأن  نكون  وجهة\nأعمال    تجارية ً   نشطة    ،    مقترنة بأسلوب   حياة        استوائي'
                    : 'As the hub of the Pacific, we\noffer the promise of a dynamic\nbusiness destination, paired with\na tropical lifestyle.'}
                </Animatable.Text>
              </ImageBackground>
            </Animatable.View>
            <Animatable.View
              animation={'fadeIn'}
              delay={500}
              style={{
                flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 650,
                height: 215,
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',

                  marginVertical: 30,
                }}>
                <Text
                  style={{
                    fontSize: lang == 'ar' ? 28 : 22,
                    color: 'white',
                    fontFamily:
                      lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Bold',
                  }}>
                  {lang == 'ar' ? 'سكان فيجي' : 'FIJI POPULATION'}
                </Text>
                <AnimateNumber
                  value={94}
                  countBy={3}
                  style={{
                    color: 'white',
                    fontSize: 115,
                    marginTop: lang == 'ar' ? -25 : 0,
                    fontFamily:
                      lang == 'ar'
                        ? 'Montserrat-Arabic-Light'
                        : 'Gilroy-Regular',
                  }}
                  formatter={val => {
                    return eval(val).toFixed(0) + '%';
                  }}
                />
                <Text
                  style={{
                    fontSize: lang == 'ar' ? 18 : 22,
                    color: 'white',
                    fontFamily:
                      lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Bold',
                    marginTop: -10,
                  }}>
                  {lang == 'ar'
                    ? 'معدل معرفة القراءة والكتابة'
                    : 'LITERACY RATE'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginVertical: 30,
                }}>
                <Text
                  style={{
                    fontSize: lang == 'ar' ? 28 : 22,
                    color: 'white',
                    fontFamily:
                      lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Bold',
                  }}>
                  {lang == 'ar' ? 'قطاع التصنيع' : 'MANUFACTURING SECTOR'}
                </Text>
                <AnimateNumber
                  value={20}
                  interval={15}
                  style={{
                    color: 'white',
                    fontSize: 115,
                    marginTop: lang == 'ar' ? -25 : 0,
                    fontFamily:
                      lang == 'ar'
                        ? 'Montserrat-Arabic-Light'
                        : 'Gilroy-Regular',
                  }}
                  formatter={val => {
                    return eval(val).toFixed(0) + '%';
                  }}
                />
                <Text
                  style={{
                    fontSize: lang == 'ar' ? 18 : 22,
                    color: 'white',
                    fontFamily:
                      lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Bold',
                    marginTop: -10,
                  }}>
                  {lang == 'ar'
                    ? 'مساهمة الناتج المحلي الإجمالي (2020)'
                    : 'GDP CONTRIBUTION (2020)'}
                </Text>
              </View>
            </Animatable.View>
          </View>
          <Animatable.View
            animation={'fadeInRight'}
            delay={800}
            style={[
              styles.viewRow,
              {flexDirection: lang == 'ar' ? 'row-reverse' : 'row'},
            ]}>
            <Image
              source={require('../../assets/Links/1.jpg')}
              style={{
                width: 600,
                height: 300,
                marginRight: lang == 'ar' ? 150 : 0,
                marginLeft: lang == 'ar' ? 0 : 150,
              }}
            />
            <ImageBackground
              style={{
                width: 600,
                height: 300,
                justifyContent: 'center',
                alignItems: lang == 'ar' ? 'flex-end' : 'flex-start',
                paddingEnd: lang == 'ar' ? 25 : 25,
                paddingStart: 20,
              }}
              source={
                lang == 'ar'
                  ? require('../../assets/backHome1-ar.png')
                  : require('../../assets/backHome1.png')
              }>
              <Animatable.Text
                animation={'slideInRight'}
                delay={300}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 26,
                }}>
                {lang == 'ar'
                  ? 'تخلق سياساتنا الحكومية الملائمة \n ًللأعمال    التجارية     فرصا   تمتد\nعبر معاقلنا  التقليدية ، فضلا" عن\nالقطاعات الحديثة السريعة النمو.'
                  : 'Our business-friendly government\npolicies create opportunities that\nFiji that extend across our\ntraditional economic strongholds,\nas well as fast-growing\nmodern sectors.'}
              </Animatable.Text>
              <Animatable.Text
                animation={'slideInRight'}
                delay={300}
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: lang == 'ar' ? 'right' : 'left',
                  fontFamily:
                    lang == 'ar' ? 'Montserrat-Arabic-Light' : 'Gilroy-Regular',
                  lineHeight: 26,
                }}>
                {lang == 'ar'
                  ? '\nنحن  مركز   العبور    إلى    اإلقليم ،\nونرحب بك لتكون جزءا من نجاحنا.'
                  : '\nWe are the gateway to the region,\nand we welcome you to be a part\nof our success.'}
              </Animatable.Text>
            </ImageBackground>
          </Animatable.View>
        </View>
        <TouchableOpacity
          onPress={() => (setScreen(1), playSound())}
          style={{
            width: 150,
            height: 125,
            alignSelf: lang == 'ar' ? 'flex-start' : 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {lang == 'ar' ? (
            <Image
              source={require('../../assets/nextar.png')}
              style={{width: 80, height: 80}}
              resizeMode="center"
            />
          ) : (
            <NextIcon style={{width: 70, height: 70}} />
          )}
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
