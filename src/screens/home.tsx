/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import TextBox from '../components/textbox';
import Header from '../components/header';
import VideoPlayer from '../components/videoplayer';
import HorizontalList from '../components/horizontal_list';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Chief Chef',
    profileImageLink: 'https://randomuser.me/api/portraits/men/51.jpg',
    name: 'Rober Kalf',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bar Tender',
    profileImageLink: 'https://randomuser.me/api/portraits/women/29.jpg',
    name: 'Janiet',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Waiter',
    profileImageLink: 'https://randomuser.me/api/portraits/men/79.jpg',
    name: 'Michael Jacov',
  },
];

function HomeScreen(): JSX.Element {
  type ItemProps = {title: string; userName: string; profileImageLink: string};
  const Item = ({title, profileImageLink, userName}: ItemProps) => (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: profileImageLink}} />
      <Text style={styles.cardTitle}>{userName}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView bounces={false}>
        <Header />
        <TextBox content="Hey Matt" type="Query" size="small" />
        <TextBox
          content="What would you like to do today ?"
          type="Query"
          size="medium"
        />
        <TextBox
          content="I want to know more about the menu"
          type="Reply"
          size="large"
        />
        <VideoPlayer />
        <HorizontalList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
