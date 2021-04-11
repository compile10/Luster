import React, {useState} from 'react';
import {View, Image} from 'react-native';

import Video from 'react-native-video';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {RectButton} from 'react-native-gesture-handler';

import Icon from './Icon';
import OText from './Text';
import DescCard from './DescCard';
import videoPostStyle from '../styles/videoPostStyle';

interface videoProps {
  source: string;
  avatar: string;
  username: string;
  title: string;
  location: string;
}

const VideoPost = (props: videoProps) => {
  const [descVisible, setDescVisible] = useState(true);
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
                source={{uri: avatar}}
                style={videoPostStyle.avatarImage}
              />
              <View style={videoPostStyle.username}>
                <OText style={videoPostStyle.usernameText}> @{username} </OText>
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
      {descVisible && (
        <DescCard
          style={videoPostStyle.descCard}
          tags="#lol #memes #test #wow #lmao #based #scating #autism"
          desc="This is my test desc. Gotta keep typing for tests."
          likes={431}
          views={3143}
        />
      )}
    </>
  );
};

export default VideoPost;
