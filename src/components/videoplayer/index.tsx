/**
 * Video Player Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

import styles from './styles';

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
          uri: 'https://www.youtube.com/embed/y3gVno6UX4Q?si=SfsTzgw4kdf1dkQO',
        }}
        style={styles.webView}
      />
    </View>
  );
}

export default VideoPlayer;
