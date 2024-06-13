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

function EventCalendar(): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <Calendar
        // Customize the appearance of the calendar
        style={styles.calendar}
        // Specify the current date
        current={'2024-06-12'}
        // Callback that gets called when the user selects a day
        onDayPress={dayConfig => {
          const {day, month, year} = dayConfig;
          const dayString = `${day}/${month}/${year}`;
          Alert.alert(
            'Schedule for ' + dayString,
            '\n \n Langugae Training Phase - 1 ',
          );
        }}
        // Mark specific dates as marked
        markedDates={{
          '2024-06-18': {selected: true, marked: true, selectedColor: 'red'},
          '2024-06-21': {marked: true, selectedColor: 'red', selected: true},
          '2024-06-28': {selected: true, marked: true, selectedColor: 'green'},
        }}
      />
    </View>
  );
}

export default EventCalendar;
