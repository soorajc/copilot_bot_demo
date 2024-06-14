/**
 * Prompt Executor Component
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState, FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import VideoPlayer from '../videoplayer';
import EventCalendar from '../event_calendar';
import EmployeeList from '../employee_list';
import type {RootState} from '../../store';

interface PromptTileProps {
  animationURI: string;
  title: string;
  promptId: string;
}

type ComponentMap = {
  [key: string]: FC;
};

const componentMap: ComponentMap = {
  pr_intro: VideoPlayer,
  pr_team: EmployeeList,
  pr_training: EventCalendar,
};

function PromptExecutor(): JSX.Element {
  const {promptId} = useSelector((state: RootState) => state.promptProcessor);
  const componentToRender = componentMap[promptId as string];

  if (componentToRender) {
    return React.createElement(componentToRender);
  } else {
    return <View />;
  }
}

export default PromptExecutor;
