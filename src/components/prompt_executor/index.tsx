import React, {useMemo, FC, lazy, Suspense} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import EventCalendar from '../event_calendar';
import EmployeeList from '../employee_list';
import type {RootState} from '../../store';

const LazyVideoPlayer = lazy(() => import('../videoplayer'));

interface PromptTileProps {
  animationURI: string;
  title: string;
  promptId: string;
}

type ComponentMap = {
  [key: string]: FC;
};

const componentMap: ComponentMap = {
  pr_intro: LazyVideoPlayer,
  pr_team: EmployeeList,
  pr_training: EventCalendar,
};

function PromptExecutor(): JSX.Element {
  const {promptId} = useSelector((state: RootState) => state.promptProcessor);
  const ComponentToRender = useMemo(
    () => componentMap[promptId as string],
    [promptId],
  );

  return (
    <View style={styles.promptContainer}>
      {ComponentToRender ? (
        <Suspense fallback={<View style={styles.loaderContainer} />}>
          <ComponentToRender />
        </Suspense>
      ) : (
        <View />
      )}
    </View>
  );
}

export default PromptExecutor;
