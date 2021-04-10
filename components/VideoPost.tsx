import React from 'react';
import {View, Text, Image} from 'react-native';

import Video from 'react-native-video';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {RectButton} from 'react-native-gesture-handler';

import Icon from './Icon';
import videoPostStyle from '../styles/videoPostStyle';

interface videoProps {
  source: string;
  avatar: string;
  username: string;
  title: string;
  location: string;
}

const VideoPost = (props: videoProps) => {
  const frame = useSafeAreaFrame();

  const {source, avatar, username, title, location} = props;
  return (
    <>
      <View style={{width: '100%', height: frame.height}}>
        <Video
          source={{uri: source}}
          style={videoPostStyle.video}
          resizeMode={'cover'}
        />
        <View style={videoPostStyle.topText}>
          <Text style={videoPostStyle.titleText}>{title}</Text>
          <View style={videoPostStyle.location}>
            <View>
              <Icon
                set="Material Icons"
                id={61915}
                style={videoPostStyle.locationIcon}
              />
            </View>
            <Text style={videoPostStyle.locationText}>{location}</Text>
          </View>
        </View>
        <View style={videoPostStyle.buttons}>
          <RectButton underlayColor="transparent" rippleColor="transparent">
            <View accessible style={videoPostStyle.user}>
              <Image
                source={{uri: avatar}}
                style={videoPostStyle.avatarImage}
              />
              <View style={videoPostStyle.username}>
                <Text style={videoPostStyle.usernameText}> @{username} </Text>
              </View>
            </View>
          </RectButton>
          <View style={videoPostStyle.iconRow}>
            <RectButton underlayColor="transparent" rippleColor="transparent">
              <Icon
                set="Material Community Icons"
                id={983512}
                style={videoPostStyle.icon}
              />
            </RectButton>
            <RectButton underlayColor="transparent" rippleColor="transparent">
              <Icon
                set="Material Icons"
                id={59612}
                style={videoPostStyle.icon}
              />
            </RectButton>
            <RectButton underlayColor="transparent" rippleColor="transparent">
              <Icon
                set="Material Community Icons"
                id={983418}
                style={videoPostStyle.icon}
              />
            </RectButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default VideoPost;
