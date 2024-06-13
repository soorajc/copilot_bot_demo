/**
 * EventCalendar Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import {Calendar} from 'react-native-calendars';

import {TRAINING_SCHEDULE} from '../../data';
import {handleCalendarPress} from '../../helper';

function EventCalendar(): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <Calendar
        style={styles.calendar}
        onDayPress={dayConfig => handleCalendarPress(dayConfig)}
        markedDates={TRAINING_SCHEDULE}
      />
    </View>
  );
}

export default EventCalendar;
