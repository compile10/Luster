/**
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import feedStyle from '../styles/feedStyle';
import VideoPost from '../components/VideoPost';
import {FlatList} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
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
  return (
    <View>
      <FlatList
        contentInsetAdjustmentBehavior={'never'}
        data={posts}
        renderItem={({item}) => <VideoPost uri={item.url} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
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
