import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import OText from './Text';
import cardStyle from '../styles/cardStyle';

interface CardProps {
  title: string;
  image: string;
  miles: number;
}

const Card = (props: CardProps) => {
  const miles = props.miles.toString();
  return (
    <View accessible style={cardStyle.container}>
      <Image
        source={{uri: props.image}}
        style={{...StyleSheet.absoluteFillObject, ...cardStyle.image}}
        blurRadius={1}
      />
      <View>
        <OText style={cardStyle.title}>{props.title}</OText>
        <OText style={cardStyle.miles}>{miles} Miles</OText>
      </View>
    </View>
  );
};

export default Card;
