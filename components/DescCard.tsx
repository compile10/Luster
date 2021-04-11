import React from 'react';
import {View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import OText from './Text';
import descCardStyle from '../styles/descCardStyle';
import Icon from './Icon';

interface SpotCardProps {
  tags: string;
  desc: string;
  likes: number;
  views: number;
  style?: any;
  onPressExit?: any;
}

const SpotCard = (props: SpotCardProps) => {
  const {style, tags, desc, likes, views, onPressExit} = props;
  return (
    <View style={descCardStyle.shadowContainer}>
      <View style={[descCardStyle.container, style]}>
        <View style={descCardStyle.exitWrapper}>
          <OText weight="bold" style={descCardStyle.tagText}>
            {tags}
          </OText>
          <RectButton
            style={descCardStyle.exitButton}
            rippleColor="transparent"
            underlayColor="transparent"
            onPress={onPressExit}>
            <Icon
              set="Material Icons"
              id={57676}
              style={descCardStyle.exitIcon}
            />
          </RectButton>
        </View>
        <OText style={descCardStyle.descText}>{desc}</OText>
        <OText style={descCardStyle.descText}>
          {likes.toString()} likes - {views.toString()} views
        </OText>
      </View>
    </View>
  );
};

export default SpotCard;
