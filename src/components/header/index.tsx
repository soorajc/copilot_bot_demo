/**
 * Header Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

function Header(): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <LottieView
        source={require('../../assets/ai_bot.json')}
        autoPlay
        loop
        style={styles.botAnimation}
      />
    </View>
  );
}

export default Header;
