import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  I18nManager,
  BackHandler,
  PanResponder,
} from 'react-native';
import aesjs from 'aes-js';
import styles from './styles';
import {useSelector} from 'react-redux';
import Language from '../Language';
import Home from '../Home';
import Category from '../Category';
import Invesment from '../invesment';
import Agriculture from '../agriculture';
import Tourism from '../Tourism';
import Manufactor from '../Manufactor';
import Energy from '../Energy';
import Agricultuer1 from '../All/agricultuer1';
import Agriculture2 from '../All/agricultuer2';
import Agricultuer3 from '../All/agricultuer3';
import Tourism1 from '../All/Tourism1';
import Tourism2 from '../All/Tourism2';
import Tourism3 from '../All/Tourism3';
import Manufactor1 from '../All/Manufactor1';
import Energy1 from '../All/Energy1';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
export default function Main() {
  const [shouldAppWork, setShouldAppWork] = useState(false);
  function onFileChange() {
    let filePath = RNFS.ExternalDirectoryPath + '/fsl.lal';
    RNFS.readFile(filePath, 'ascii')
      .then(res => {
        console.log(res);

        var encodedStringAtoB = res;
        var encodedDate = res;

        var key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var encryptedBytes = aesjs.utils.hex.toBytes(encodedDate);
        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var decryptedBytes = aesCbc.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

        console.log(decryptedText);
        var decodesToDay = new Date(decryptedText);
        var today = new Date();
        console.log('decodesToDay', decodesToDay);
        if (today > decodesToDay) {
          // alert('Fiji app is expired');
          setShouldAppWork(false);
          setTimeout(() => {
            BackHandler.exitApp();
          }, 3000);
          console.log('today is great than date');
        } else {
          console.log('today is less than day');
          if (res == '') {
            setShouldAppWork(false);
            setTimeout(() => {
              BackHandler.exitApp();
            }, 3000);
          } else {
            setShouldAppWork(true);
          }
        }
      })
      .catch(err => {
        // alert('Fiji app is expired');
        setTimeout(() => {
          BackHandler.exitApp();
        }, 3000);
        console.log(err.message, err.code);
      });
  }

  useEffect(() => {
    // onFileChange();
  }, [shouldAppWork]);
  const {Screenn = ''} = useSelector(state => state.home.selectedCategory);
  const [Screen, setScreen] = useState(15);
  const lang = useSelector(state => state.home.language);
  const timerId = useRef(false);
  const [timeForInactivityInSecond, setTimeForInactivityInSecond] = useState(
    200,
  );

  useEffect(() => {
    resetInactivityTimeout();
  }, []);

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        // console.log('user starts touch');
        resetInactivityTimeout();
      },
    }),
  ).current;

  const resetInactivityTimeout = () => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      // action after user has been detected idle
      setScreen(15);
    }, timeForInactivityInSecond * 1000);
  };
  return (
    <SafeAreaView style={[styles.container]} {...panResponder.panHandlers}>
      {!shouldAppWork ? (
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/Fiji+.gif')}>
          <Video
            source={require('../../assets/fijivideo.mp4')}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              alignItems: 'stretch',
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
            muted={true}
            repeat={true}
            resizeMode={'cover'}
            rate={1.0}
            ignoreSilentSwitch={'obey'}
          />
          {Screen == 0 ? (
            <Home setScreen={setScreen} />
          ) : Screen == 1 ? (
            <Category setScreen={setScreen} />
          ) : Screen == 2 ? (
            <Agriculture setScreen={setScreen} />
          ) : Screen == 3 ? (
            <Tourism setScreen={setScreen} />
          ) : Screen == 4 ? (
            <Manufactor setScreen={setScreen} />
          ) : Screen == 5 ? (
            <Energy setScreen={setScreen} />
          ) : Screen == 6 ? (
            <Invesment setScreen={setScreen} />
          ) : Screen == 7 ? (
            <Agricultuer1 setScreen={setScreen} />
          ) : Screen == 8 ? (
            <Agriculture2 setScreen={setScreen} />
          ) : Screen == 9 ? (
            <Agricultuer3 setScreen={setScreen} />
          ) : Screen == 10 ? (
            <Tourism1 setScreen={setScreen} />
          ) : Screen == 11 ? (
            <Tourism2 setScreen={setScreen} />
          ) : Screen == 12 ? (
            <Tourism3 setScreen={setScreen} />
          ) : Screen == 13 ? (
            <Manufactor1 setScreen={setScreen} />
          ) : Screen == 14 ? (
            <Energy1 setScreen={setScreen} />
          ) : Screen == 15 ? (
            <Language setScreen={setScreen} />
          ) : null}
        </ImageBackground>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}
