/**
 * TextBox Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Dimensions, Animated} from 'react-native';
import styles from './styles';
import {TypeAnimation} from 'react-native-type-animation';

interface TextBoxProps {
  content: string;
  type: string;
  size: string;
  actionHandler: () => void;
}

interface WidthType {
  [key: string]: number;
}

interface TextBoxStyle {
  alignment: 'flex-start' | 'flex-end';
  backgroundColor: string;
}

interface TextBoxConfig {
  [key: string]: TextBoxStyle;
}

const {height, width} = Dimensions.get('window');

const widthSizes = {
  small: width * 0.3,
  medium: width * 0.5,
  large: width * 0.7,
};

const textBoxConfig: TextBoxConfig = {
  Query: {
    alignment: 'flex-start',
    backgroundColor: '#212121',
  },
  Reply: {
    alignment: 'flex-end',
    backgroundColor: '#EEEEEE',
  },
};

function TextBox(props: TextBoxProps) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const {content, type, size, actionHandler} = props;
  const textBoxAlignment = textBoxConfig[type]['alignment'];
  const textBoxColor = textBoxConfig[type]['backgroundColor'];

  const widthType: WidthType = {
    medium: widthSizes.medium,
    small: widthSizes.small,
    large: widthSizes.large,
  };

  useEffect(() => {
    const animation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    animation.start();

    return () => {
      animation.stop();
    };
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
      <TypeAnimation
        style={styles.textLabel}
        blinkSpeed={4000}
        cursor={false}
        sequence={[
          {text: content},
          {
            action: () => {
              actionHandler();
            },
          },
        ]}
      />
    </Animated.View>
  );
}

export default TextBox;
