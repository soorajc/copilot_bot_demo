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
import {EMPLOYEE_LIST} from '../../data';

function EmployeeList(): JSX.Element {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={EMPLOYEE_LIST}
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

export default EmployeeList;
