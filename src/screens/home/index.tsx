/**
 * Home Screen
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import styles from './styles';
import TextBox from '../../components/textbox';
import Header from '../../components/header';
import PromptSelector from '../../components/prompt_selector';
import PromptExecutor from '../../components/prompt_executor';

function HomeScreen(): JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showPrompt, setPromptDisplay] = useState<boolean>(false);

  const handlePromptSelector = () => {
    setPromptDisplay(true);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        onContentSizeChange={(contentWidth, contentHeight) => {
          scrollViewRef.current?.scrollTo({y: contentHeight});
        }}
        bounces={false}
        ref={scrollViewRef}>
        <Header />
        <TextBox
          content={`Hey Matt GoodMorning 😀 ! What would you like to do today?`}
          type="Query"
          size="large"
          actionHandler={handlePromptSelector}
        />
        {showPrompt && <PromptSelector />}
        <PromptExecutor />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
