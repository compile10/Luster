import React, { useState, useCallback, useRef } from 'react';
import { View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import OText from '../components/Text';
import { setRoot } from 'react-native-navigation-hooks'
import { SafeAreaView } from 'react-native-safe-area-context';

import {navigationRoot} from '../navigation';
import Icon from '../components/Icon';




const Login = () => {
    const setNav = () => {
        Promise.all([
            Icon.getImageSource('Material Icons', 59530, 30, 'black'),
            Icon.getImageSource('Material Icons', 58715, 30, 'black'),
        ]).then(icons => setRoot(navigationRoot(icons)))
    }
return(
    <SafeAreaView style={{ flex: 1,}}>
        <OText style={{ fontSize: 20 }}>Test Login</OText>
        <RectButton style={{borderColor: 'red', borderWidth: 2, width: 100, height:40}} onPress={() => setNav()}><OText>Exit Login</OText></RectButton>
    </SafeAreaView>
    )
}

export default Login;