/**
 * Prompt Tile Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {useDispatch} from 'react-redux';

import {handlePrompt} from '../../features/prompt_selector/promptSlice';
import styles from './styles';

interface PromptTileProps {
  animationURI: string;
  title: string;
  promptId: string;
}

function PromptTile(props: PromptTileProps): JSX.Element {
  const {title, animationURI, promptId} = props;
  const dispatch = useDispatch();

  return (
    <View style={styles.promptContainer}>
      <TouchableOpacity
        style={styles.tagContainer}
        onPress={() => dispatch(handlePrompt(promptId))}>
        <View style={styles.iconContainer}>
          <LottieView
            source={animationURI}
            autoPlay
            loop
            style={styles.animatedIcon}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PromptTile;
