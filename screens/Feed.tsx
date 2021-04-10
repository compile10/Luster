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
    title: 'Test Video #1',
    location: 'My House',
    username: 'compile10',
  },
  {
    id: 2,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Test Video Deux',
    location: 'Who even Cares?',
    username: 'BobBobson21',
  },
];
const Feed = () => {
  const frame = useSafeAreaFrame();

  return (
    <View>
      <FlatList
        contentInsetAdjustmentBehavior={'never'}
        data={posts}
        renderItem={({item}) => (
          <VideoPost
            title={item.title}
            location={item.location}
            source={item.url}
            avatar={
              'https://pbs.twimg.com/profile_images/1380792035716698119/3l5wLTZ__400x400.jpg'
            }
            username={item.username}
          />
        )}
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
