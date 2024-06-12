/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Dimensions, Animated} from 'react-native';
import styles from './styles';

interface TextBoxProps {
  content: string;
  type: string;
  size: string;
}

interface WidthType {
  [key: string]: number;
}

const {height, width} = Dimensions.get('window');

const widthSizes = {
  small: width * 0.3,
  medium: width * 0.5,
  large: width * 0.7,
};

function TextBox(props: TextBoxProps) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const {content, type, size} = props;
  const textBoxAlignment = type === 'Query' ? 'flex-start' : 'flex-end';
  const textBoxColor = type === 'Query' ? 'black' : '#EEEEEE';
  const textColor = type === 'Query' ? 'white' : 'black';
  const animationType = type === 'Query' ? 'fadeInLeft' : 'fadeInRight';

  const widthType: WidthType = {
    medium: widthSizes.medium,
    small: widthSizes.small,
    large: widthSizes.large,
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.chatView,
        {
          alignSelf: textBoxAlignment,
          backgroundColor: textBoxColor,
          width: widthType[size],
          opacity: fadeAnim,
        },
      ]}>
      <Text style={[styles.textLabel, {color: textColor}]}>{content}</Text>
    </Animated.View>
  );
}

export default TextBox;
