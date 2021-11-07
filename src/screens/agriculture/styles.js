import {StyleSheet} from 'react-native';
import {BW} from '../../consts';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  sideView: {
    width: '30%',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },

  bref: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
  },

  viewRow: {
    width: '100%',
  },
  cardsView: {
    flex: 1,
    width: '70%',
    marginVertical: 60,
    marginHorizontal: 60,
    justifyContent: 'center',
  },

  btnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFD297',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#963B23',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default styles;
