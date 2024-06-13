/**
 * Prompt Selector Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {FlatList, Animated} from 'react-native';

import styles from './styles';
import PromptTile from '../prompt_tile';
import {LIST_OF_PROMPTS} from '../../data';

function PromptSelector(): JSX.Element {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <Animated.View style={[styles.promptContainer, {opacity: fadeAnim}]}>
      <FlatList
        data={LIST_OF_PROMPTS}
        scrollEnabled={false}
        bounces={false}
        renderItem={({item}) => (
          <PromptTile
            title={item.title}
            animationURI={item.animationURI}
            promptId={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Animated.View>
  );
}

export default PromptSelector;
