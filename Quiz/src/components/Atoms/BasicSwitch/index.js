import React from 'react';
import Switch from "@mui/material/Switch";
import { setIsCheckedTrue, setIsCheckedFalse } from '../../../app/features/quizQuestions';
import { useSelector, useDispatch } from 'react-redux';

const BasicSwitch = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector(state => state.quizQuiestions.isChecked);
  const label = { inputProps: { "aria-label": "Start/Stop Quiz" } };

  const handleClick = () => {
    isChecked
      ? dispatch(setIsCheckedFalse())
      : dispatch(setIsCheckedTrue())
  }

  return <Switch
    onClick={handleClick}
    {...label}
    checked={isChecked}
  />
};

export default BasicSwitch;
