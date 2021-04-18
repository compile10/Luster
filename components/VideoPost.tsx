import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import Video from 'react-native-video';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  runOnJS,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Icon from './Icon';
import OText from './Text';
import DescCard from './DescCard';
import videoPostStyle from '../styles/videoPostStyle';

interface VideoProps {
  source: string;
  avatar: string;
  username: string;
  title: string;
  location: string;
}

const VideoPost = forwardRef((props: VideoProps, ref: any) => {
  const descOffset = useSharedValue(0);
  const [descVisible, setDescVisible] = useState(false);
  const [pausedState, setPausedState] = useState(true);
  const frame = useSafeAreaFrame();

  const play = () => {
    setPausedState(false);
  };
  useImperativeHandle(ref, () => ({
    play
  }));
  const onPressDesc = () => {
    setDescVisible(true);
    descOffset.value = withSpring(235, { damping: 25, stiffness: 100 });
  };

  // runOnJS requires the function to be wrapped if its from a lib
  const wrappedSet = () => {
    setDescVisible(false);
  };
  const onPressExit = () => {
    descOffset.value = withSpring(0, { overshootClamping: true }, () =>
      runOnJS(wrappedSet)(),
    );
  };
  const spotCardEnterAni = useAnimatedStyle(() => ({
    transform: [{ translateY: -descOffset.value }],
  }));

  const { source, avatar, username, title, location } = props;
  return (
    <>
      <View style={{ width: '100%', height: frame.height }}>
        <TouchableWithoutFeedback onPress={() => setPausedState(!pausedState)}>
          <Video
            source={{ uri: source }}
            style={videoPostStyle.video}
            paused={pausedState}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
        <View style={videoPostStyle.topText}>
          <OText style={videoPostStyle.titleText}>{title}</OText>
          <View style={videoPostStyle.location}>
            <View>
              <Icon
                set="Material Icons"
                id={61915}
                style={videoPostStyle.locationIcon}
              />
            </View>
            <OText style={videoPostStyle.locationText}>{location}</OText>
          </View>
        </View>
        <View style={videoPostStyle.buttons}>
          <RectButton underlayColor="transparent" rippleColor="transparent">
            <View accessible style={videoPostStyle.user}>
              <Image
                source={{ uri: avatar }}
                style={videoPostStyle.avatarImage}
              />
              <View style={videoPostStyle.username}>
                <OText style={videoPostStyle.usernameText}> @{username} </OText>
              </View>
            </View>
          </RectButton>
          <View style={videoPostStyle.iconRow}>
            <RectButton
              underlayColor="transparent"
              rippleColor="transparent"
              onPress={onPressDesc}>
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
      {descVisible && (
        <Animated.View
          style={[
            {
              position: 'absolute',
              bottom: -210,
            },
            spotCardEnterAni,
          ]}>
          <DescCard
            onPressExit={onPressExit}
            style={videoPostStyle.descCard}
            tags="#lol #memes #test #wow #lmao #based #scating #autism"
            desc="This is my test desc. Gotta keep typing for tests."
            likes={431}
            views={3143}
          />
        </Animated.View>
      )}
    </>
  );
});

export default VideoPost;
