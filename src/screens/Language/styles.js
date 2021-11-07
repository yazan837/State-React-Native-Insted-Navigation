import {StyleSheet} from 'react-native';
import {BW} from '../../consts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1
  },
  sideView: {
    width: '20%',
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subtitle: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
  viewRow: {flex: 1, width: '100%', flexDirection: 'row'},
  block: {
    // flex: 1,
    width: '60%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 50,
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'AraJozoor-Regular',
  },
  btnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 75,
  },
  btnText: {
    color: '#963B23',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default styles;
