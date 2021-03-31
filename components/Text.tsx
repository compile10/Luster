import React from 'react';
import {Text} from 'react-native';

interface otextProps {
  style?: any;
  weight?: string;
  children: string | string[];
}

const OText = (props: otextProps) => {
  let family;
  switch (props.weight) {
    case 'bold': {
      family = 'OpenSans-Bold';
      break;
    }
    case 'italics': {
      family = 'OpenSans-Italic';
      break;
    }
    case 'light': {
      family = 'OpenSans-Light';
      break;
    }
    case 'semibold': {
      family = 'OpenSans-SemiBold';
      break;
    }
    default: {
      family = 'OpenSans-Regular';
      break;
    }
  }
  let styleObj = {...props.style, fontFamily: family};
  return <Text style={styleObj}>{props.children}</Text>;
};

export default OText;
