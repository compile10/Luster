/**
 * @format
 */

import React, { useState, useCallback, useRef } from 'react';
import { View } from 'react-native';

import { FlatList, RectButton } from 'react-native-gesture-handler';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import feedStyle from '../styles/feedStyle';
import VideoPost from '../components/VideoPost';
import e from 'express';

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
  const postRefs = useRef({});

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 70,
  };

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    viewableItems.map((post: any) => {
      postRefs.current[post.key].play();
      return null;
    });
    console.log("Viewables:")
    const refsKeys = Object.keys(postRefs.current);
    const viewableKeys = viewableItems.map((post: any) => post.key);
    console.log(viewableKeys)
    console.log("Unviewables:")
    refsKeys.map((key) => {
      for (let i = 0; i <= viewableKeys.length; i++) {
        if(viewableKeys[i] === key){
          return null
        }
      }
      console.log(key)
      postRefs.current[key].pause();
      return null;
    });
  }, []);

  return (
    <View>
      <FlatList
        contentInsetAdjustmentBehavior="never"
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <VideoPost
                // eslint-disable-next-line no-return-assign
                ref={(ref: any) => (postRefs.current[item.id.toString()] = ref)}
                title={item.title}
                location={item.location}
                source={item.url}
                startplay
                avatar="https://pbs.twimg.com/profile_images/1380792035716698119/3l5wLTZ__400x400.jpg"
                username={item.username}
              />
            );
          }
          return (
            <VideoPost
              // eslint-disable-next-line no-return-assign
              ref={(ref: any) => (postRefs.current[item.id.toString()] = ref)}
              title={item.title}
              location={item.location}
              source={item.url}
              avatar="https://pbs.twimg.com/profile_images/1380792035716698119/3l5wLTZ__400x400.jpg"
              username={item.username}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        snapToInterval={frame.height}
        snapToAlignment="start"
        decelerationRate="fast"
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
