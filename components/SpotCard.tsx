import React from 'react';
import {View, Image} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import OText from './Text';
import spotCardStyle from '../styles/spotCardStyle';
import Icon from './Icon';

interface SpotCardProps {
  title: string;
  image: string;
  desc: string;
  likes: number;
  onPressExit: any;
  hostile: boolean;
}

const SpotCard = (props: SpotCardProps) => {
  const {title, image, desc, likes, onPressExit, hostile} = props;
  return (
    <View style={spotCardStyle.shadowContainer}>
      <View style={spotCardStyle.container}>
        <Image source={{uri: image}} style={spotCardStyle.image} />
        <View style={spotCardStyle.textContainer}>
          <OText style={spotCardStyle.title}>{title}</OText>
          <View style={spotCardStyle.likeLine}>
            <OText style={spotCardStyle.likes}>{likes.toString()}</OText>
            <Icon
              set="Material Icons"
              id={59612}
              style={spotCardStyle.likeIcon}
            />
          </View>
          <View style={spotCardStyle.descBox}>
            <OText style={spotCardStyle.desc}>{desc}</OText>
          </View>
          <View style={spotCardStyle.buttonRow}>
            <View style={spotCardStyle.mapButton}>
              <Icon
                set="Material Icons"
                id={58717}
                style={spotCardStyle.mapIcon}
              />
              <OText>Open in Maps</OText>
            </View>
            <View style={spotCardStyle.clipButton}>
              <Icon
                set="Material Community Icons"
                id={985627}
                style={spotCardStyle.clipIcon}
              />
              <OText>View Clips</OText>
            </View>
          </View>
          {hostile && (
            <View style={spotCardStyle.archWarning}>
              <Icon set="Ionicons" id={62905} style={spotCardStyle.archIcon} />
              <OText weight="bold" style={spotCardStyle.archWarningText}>
                This spot may have Hostile Architecture
              </OText>
            </View>
          )}
        </View>
        <RectButton
          style={spotCardStyle.exitButton}
          rippleColor="transparent"
          underlayColor="transparent"
          onPress={onPressExit}>
          <Icon
            set="Material Icons"
            id={57676}
            style={spotCardStyle.exitIcon}
          />
        </RectButton>
      </View>
    </View>
  );
};

export default SpotCard;
