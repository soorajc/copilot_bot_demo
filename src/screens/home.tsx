/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import TextBox from '../components/textbox';
import Header from '../components/header';
import VideoPlayer from '../components/videoplayer';
import HorizontalList from '../components/horizontal_list';
import PromptSelector from '../components/prompt_selector';

function HomeScreen(): JSX.Element {
  const [showPrompt, setPromptDisplay] = useState<boolean>(false);

  const handlePromptSelector = () => {
    setPromptDisplay(true);
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView bounces={false}>
        <Header />
        <TextBox
          content={`Hey Matt GoodMorning 😀 ! What would you like to do today?`}
          type="Query"
          size="large"
          actionHandler={handlePromptSelector}
        />
        {showPrompt && <PromptSelector />}
        {/* <VideoPlayer />
        <HorizontalList /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
