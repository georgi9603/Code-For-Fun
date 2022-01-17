import React, { useRef } from 'react';
import styles from './congratulations.module.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import ConfettiElement from '../../Atoms/Confetti';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { setIsCheckedFalse } from '../../../app/features/quizQuestions';

const Congratulations = () => {
    const dispatch = useDispatch();
    const isChecked = useSelector(state => state.quizQuiestions.isChecked);
    const choiceQuestions = useSelector(state => state.quizQuiestions.choiceQuestions);
    const yesOrNoQuestions = useSelector(state => state.quizQuiestions.yesOrNoQuestions);
    const history = useHistory();
    const congratulationsConfetti = useRef(null);
    const { width, height } = useWindowSize(congratulationsConfetti);

    const resetQuiz = () => {
        dispatch(setIsCheckedFalse());
        history.push('/');
    }

    const getCorrectAnswers = (questions) => {
        return questions.reduce(function (accumulator, currentValue) {
            if (+currentValue.selectedValue === +currentValue.correctAnswer) {
                accumulator += 1;
            }

            return accumulator
        }, 0);
    }

    const getWrongAnswers = (questions) => {
        return questions.reduce(function (accumulator, currentValue) {
            if (+currentValue.selectedValue !== +currentValue.correctAnswer) {
                accumulator += 1;
            }

            return accumulator
        }, 0);
    }

    return (
        <div ref={congratulationsConfetti} className={styles.congratsWrapper}>
            <div className={styles.headerWrapper}>
                <h1>Congratulations</h1>
                <h2>You have successfully submitted the quiz</h2>
            </div>
            <div className={styles.headerWrapper}>
                <div>
                    <h3>Correct answers: {isChecked ? getCorrectAnswers(yesOrNoQuestions) : getCorrectAnswers(choiceQuestions)}</h3>
                </div>
                <div>
                    <h3>Wrong answers: {isChecked ? getWrongAnswers(yesOrNoQuestions) : getWrongAnswers(choiceQuestions)}</h3>
                </div>
            </div>
            <div className={styles.congratsButtonsWrapper}>
                <Button variant="contained" color="success" onClick={resetQuiz}>Reset Quiz</Button>
            </div>
            <ConfettiElement width={width} height={height}></ConfettiElement>
        </div >
    )
}

export default Congratulations
