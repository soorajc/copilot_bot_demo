/**
 * Prompt Selector Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState, useEffect} from 'react';
import {View, FlatList, Animated} from 'react-native';

import styles from './styles';
import PromptTile from '../prompt_tile';

const DATA = [
  {
    id: '#p1',
    title: 'Watch Introduction Video',
    animationURI: require('../../assets/video_training.json'),
  },
  {
    id: '#p2',
    title: 'Know your team',
    animationURI: require('../../assets/office_team.json'),
  },
  {
    id: '#p3',
    title: 'Check training schedule',
    animationURI: require('../../assets/training_schedule.json'),
  },
];

function PromptSelector(): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.promptContainer, {opacity: fadeAnim}]}>
      <FlatList
        data={DATA}
        scrollEnabled={false}
        bounces={false}
        renderItem={({item}) => (
          <PromptTile title={item.title} animationURI={item.animationURI} />
        )}
        keyExtractor={item => item.id}
      />
    </Animated.View>
  );
}

export default PromptSelector;
