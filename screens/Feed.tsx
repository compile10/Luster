/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Video from 'react-native-video';

import feedStyle from '../styles/feedStyle';

const Feed = () => {
  return (
    <>
      <Video
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // Can be a URL or a local file.
        style={feedStyle.video}
        resizeMode={'cover'}
      />
    </>
  );
};

export default Feed;
