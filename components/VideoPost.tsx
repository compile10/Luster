import React from 'react';
import {View} from 'react-native';

import Video from 'react-native-video';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import videoPostStyle from '../styles/videoPostStyle';

interface videoProps {
  uri: string;
}

const VideoPost = (props: videoProps) => {
  const frame = useSafeAreaFrame();
  const {uri} = props;
  return (
    <View style={{width: '100%', height: frame.height}}>
      <Video
        source={{uri: uri}}
        style={videoPostStyle.video}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default VideoPost;
