import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import NavigationService from '../navigation/NavigationService'
import HomeIcon from '../assets/homeicon.svg'
import NextIcon from '../assets/nexticon.svg'

const Footer = ({ style }) => {
  return (
    <View style={[styles.footer, style]}>
      <TouchableOpacity
        onPress={() => NavigationService.navigate('Language')}
        style={styles.footerBtn}
      >
        <HomeIcon style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => NavigationService.goBack()}
        style={[styles.footerBtn, { paddingTop: 20 }]}
      >
        <NextIcon style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',

    // height: '100%',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 60,
    lineHeight: 62,
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
  footerBtn: {
    width: 150,
    height: 150,
    // alignItems: 'center',
  },
})

export default Footer
