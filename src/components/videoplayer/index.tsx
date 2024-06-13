/**
 * Video Player Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

import styles from './styles';
import {TRAINING_VIDEO_URL} from '../../data';

function VideoPlayer(): JSX.Element {
  return (
    <View style={styles.videoPlayerContainer}>
      <WebView
        mediaPlaybackRequiresUserAction={true}
        allowsInlineMediaPlayback={false}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
        domStorageEnabled={true}
        source={{
          uri: TRAINING_VIDEO_URL,
        }}
        style={styles.webView}
      />
    </View>
  );
}

export default VideoPlayer;
