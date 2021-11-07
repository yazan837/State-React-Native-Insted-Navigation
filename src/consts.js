import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const utils = {
  fill: {width: '100%', height: '100%'},
  center: {alignItems: 'center', justifyContent: 'center'},
};

const consts = {BW: width / 1600, BH: height / 2560};

const shadow = {
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
    },
    android: {
      elevation: 1,
    },
  }),
};
const themeObject = {
  consts,
  shadow,
};
export default themeObject;
