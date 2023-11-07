import React, { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import { fetchActiveTasks } from '../../../AuthScreen/Util';
import DisplayContribution from '../../../../components/DisplayContribution';

const ActiveTaskDropDown = () => {
  const [activeTasks, setActiveTasks] = useState([]);
  const { loggedInUserData } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const userName = loggedInUserData?.username;
        const contributionResponse = await fetchActiveTasks(userName);
        setActiveTasks(contributionResponse.tasks);
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return <DisplayContribution tasks={activeTasks} />;
};

export default ActiveTaskDropDown;
