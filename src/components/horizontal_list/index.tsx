/**
 * HorizontalList Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import AvatarCard from '../avatar_card';

const DATA = [
  {
    id: 'EMP#AC145',
    designation: 'Chief Chef',
    profileImageLink: 'https://randomuser.me/api/portraits/men/51.jpg',
    employeeName: 'Rober Kalf',
  },
  {
    id: 'EMP#AC146',
    designation: 'Bar Tender',
    profileImageLink: 'https://randomuser.me/api/portraits/women/29.jpg',
    employeeName: 'Janiet',
  },
  {
    id: 'EMP#AC147',
    designation: 'Waiter',
    profileImageLink: 'https://randomuser.me/api/portraits/men/79.jpg',
    employeeName: 'Michael Jacov',
  },
];

function HorizontalList(): JSX.Element {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={DATA}
        bounces={false}
        horizontal
        renderItem={({item}) => (
          <AvatarCard
            designation={item.designation}
            profileImageLink={item.profileImageLink}
            employeeName={item.employeeName}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HorizontalList;
