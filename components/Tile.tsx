import React from 'react';
import { View, Image } from 'react-native';

import Icon from './Icon';
import OText from './Text';

import { tileStyle } from '../styles';

interface TileProps {
  title: string;
  username: string;
  avatar: string;
  thumbnail: string;
  skatespot: string;
  views: number;
  likes: number;
}

const Tile = (props: TileProps) => (
  <View style={tileStyle.container}>
    <Image source={{ uri: props.thumbnail }} style={tileStyle.image} />
    <View style={tileStyle.afterImage}>
      <View>
        <OText style={tileStyle.title}>{props.title}</OText>
        <View style={tileStyle.skatspotContainer}>
          <Icon
            set="Material Icons"
            id={61915}
            style={{ fontSize: 25, color: 'black' }}
          />
          <View style={tileStyle.skatespotTextSpacer}>
            <OText style={tileStyle.skatespotText}>{props.skatespot}</OText>
          </View>
        </View>
      </View>
      <View style={tileStyle.seperator} />
      <View style={tileStyle.bottomrow}>
        <View>
          <View style={tileStyle.leftContainer}>
            <Image source={{ uri: props.avatar }} style={tileStyle.avatar} />
            <OText style={tileStyle.username}>{props.username}</OText>
          </View>
        </View>
        <View style={tileStyle.rightContainer}>
          <OText style={tileStyle.righttext}>
            {props.likes.toString()}
            {' '}
            Likes -
            {props.views.toString()}
            {' '}
            Views
          </OText>
        </View>
      </View>
    </View>
  </View>
);

export default Tile;
