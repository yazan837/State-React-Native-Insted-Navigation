import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Card = ({item, style}) => {
  return (
    <View
      style={{
        height: 325,
        width: 160,
      }}>
      <View style={{flex: 5}}>
        <Image style={{height: '100%', width: '100%'}} source={item.image} />
      </View>
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: '#000',
          backgroundColor: '#BB2026',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', color: '#fff'}}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Card;
