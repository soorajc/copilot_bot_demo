/**
 * AvatarCard Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

type ItemProps = {
  designation: string;
  employeeName: string;
  profileImageLink: string;
};

function AvatarCard({
  designation,
  profileImageLink,
  employeeName,
}: ItemProps): JSX.Element {
  return (
    <View style={styles.card}>
      <Image style={styles.profileImage} source={{uri: profileImageLink}} />
      <Text style={styles.employeeName}>{employeeName}</Text>
      <Text style={styles.designation}>{designation}</Text>
    </View>
  );
}

export default AvatarCard;
