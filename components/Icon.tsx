import React from 'react';
import {Text, NativeModules, processColor, PixelRatio} from 'react-native';

import {iconImageCache, iconImageErrorCache} from '../localCache';

const {iconManager} = NativeModules;

const DEFAULT_SIZE = 12;
const DEFAULT_COLOR = 'black';

interface IconProps {
  style: any;
  id: number;
  set: string;
}

const trueSet = (set: string) => {
  let finalSet: string;
  if (set === 'Material Community Icons') {
    finalSet = 'Material Design Icons'; // changes set name to name of font
  } else {
    finalSet = set;
  }
  return finalSet;
};

async function getImageSource(
  set: string,
  id: number,
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
) {
  const glyph = String.fromCodePoint(id);
  const processedColor = processColor(color);
  const colorStr = String(processedColor);
  const cacheKey = `${glyph}:${size}:${colorStr}`;

  if (iconImageCache().has(cacheKey)) {
    return iconImageCache().get(cacheKey);
  }
  try {
    const imagePath = await iconManager.getImageForFont(
      trueSet(set),
      glyph,
      size,
      processedColor,
    );
    const value = {uri: imagePath, scale: PixelRatio.get()};
    iconImageCache().set(cacheKey, value);
    return value;
  } catch (error) {
    iconImageErrorCache().set(cacheKey, error);
    throw error;
  }
}

const Icon = (props: IconProps) => {
  const styleDefault = {
    fontSize: DEFAULT_SIZE,
    color: DEFAULT_COLOR,
  };
  const {set, style, id} = props;

  const styleObj = {fontFamily: trueSet(set), ...styleDefault, ...style};

  return <Text style={styleObj}>{String.fromCodePoint(id)}</Text>;
};

Icon.getImageSource = getImageSource;
export default Icon;
