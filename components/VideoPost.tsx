import React from 'react';
import {Dimensions, View} from 'react-native';
import Video from 'react-native-video';

import videoPostStyle from '../styles/videoPostStyle';

interface videoProps {
  uri: string;
}

const VideoPost = (props: videoProps) => {
  const {uri} = props;
  return (
    <View style={{width: '100%', height: Dimensions.get('window').height}}>
      <Video
        source={{uri: uri}}
        style={videoPostStyle.video}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default VideoPost;
