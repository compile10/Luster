/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {FlatList, RectButton} from 'react-native-gesture-handler';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import feedStyle from '../styles/feedStyle';
import VideoPost from '../components/VideoPost';

const posts = [
  {
    id: 1,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];
const Feed = () => {
  const frame = useSafeAreaFrame();

  return (
    <View>
      <FlatList
        contentInsetAdjustmentBehavior={'never'}
        data={posts}
        renderItem={({item}) => <VideoPost uri={item.url} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={frame.height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
      <RectButton>
        <View />
      </RectButton>
    </View>
  );
};

Feed.options = {
  statusBar: {
    style: 'dark',
    drawBehind: true,
    backgroundColor: 'transparent',
  },
  topBar: {
    visible: 'false',
  },
};

export default Feed;
