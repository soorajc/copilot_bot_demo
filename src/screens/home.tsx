/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import TextBox from '../components/textbox';
import Header from '../components/header';
import VideoPlayer from '../components/videoplayer';
import HorizontalList from '../components/horizontal_list';
import PromptSelector from '../components/prompt_selector';
import EventCalendar from '../components/event_calendar';

function HomeScreen(): JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showPrompt, setPromptDisplay] = useState<boolean>(false);

  const handlePromptSelector = () => {
    setPromptDisplay(true);
    //scrollViewRef.current?.scrollToEnd();
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
        {showPrompt && <VideoPlayer />}
        {showPrompt && <HorizontalList />}
        {showPrompt && <EventCalendar />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
