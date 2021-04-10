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
}

const VideoPost = (props: videoProps) => {
  const frame = useSafeAreaFrame();

  const {source, avatar, username} = props;
  return (
    <>
      <View style={{width: '100%', height: frame.height}}>
        <Video
          source={{uri: source}}
          style={videoPostStyle.video}
          resizeMode={'cover'}
        />
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
        </View>
      </View>
    </>
  );
};

export default VideoPost;
