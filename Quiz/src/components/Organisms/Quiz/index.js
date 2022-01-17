import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setChoiceQuestions, setYesOrNoQuestions, restartQuizSession } from '../../../app/features/quizQuestions';
import BasicSwitch from '../../Atoms/BasicSwitch';
import RadioButtonsGroup from '../../Molecules/RadioGroup';
import styles from './quiz.module.css';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { queries } from '../../../constants/endpoints';
import { useFetch } from '../../../hooks/useFetch';

const Quiz = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [currentStep, setCurrentStep] = useState(1);
    const quizWrapperRef = useRef(null);
    const isChecked = useSelector(state => state.quizQuiestions.isChecked);
    const choiceQuestions = useSelector(state => state.quizQuiestions.choiceQuestions);
    const yesOrNoQuestions = useSelector(state => state.quizQuiestions.yesOrNoQuestions);
    const [choiceQuestionsResult] = useFetch(queries.choiceQuestions);
    const [yesOrNoQuestionsResult] = useFetch(queries.yesOrNoQuestions);

    useEffect(() => {
        dispatch(setChoiceQuestions(choiceQuestionsResult));
        dispatch(setYesOrNoQuestions(yesOrNoQuestionsResult));
    }, [choiceQuestionsResult, yesOrNoQuestionsResult])

    useEffect(() => {
        resetQuiz();
    }, [isChecked])

    const resetQuiz = () => {
        const toResetChoiceQuestions = JSON.parse(JSON.stringify(choiceQuestions));
        const toResetYesOrNoQuestions = JSON.parse(JSON.stringify(yesOrNoQuestions));

        toResetChoiceQuestions.forEach(question => {
            question.selectedValue = null
        });
        toResetYesOrNoQuestions.forEach(question => {
            question.selectedValue = null
        });

        setCurrentStep(1);
        dispatch(restartQuizSession({ toResetChoiceQuestions, toResetYesOrNoQuestions }));
    }

    const submitQuiz = async () => {
        history.push('/congratulations');
    }

    const decreaseStep = () => {
        setCurrentStep(currentStep => currentStep - 1);
    }

    const increaseStep = () => {
        setCurrentStep(currentStep => currentStep + 1)
    }

    const isFirstQuestion = () => {
        return currentStep === 1;
    }

    const isLastQuestion = () => {
        return currentStep === 10;
    }

    return (
        <div ref={quizWrapperRef} className={styles.quizWrapper}>
            <div className={styles.questionsWrapper}>
                <div>{`Question ${currentStep} / ${isChecked ? yesOrNoQuestions.length : choiceQuestions.length}`}</div>
                <BasicSwitch />
                <div>{isChecked ? 'Toggle OFF for question with specific options' : 'Toggle ON for question with Yes/No options'}</div>
                <div>! Warning upon toggle the quiz will be restarted !</div>
            </div>
            <div className={styles.questionsWrapper}>
                {isChecked
                    ? yesOrNoQuestions.map(question => question.id === currentStep && <RadioButtonsGroup quizWrapperRef={quizWrapperRef} key={question.id} question={question} />)
                    : choiceQuestions.map(question => question.id === currentStep && <RadioButtonsGroup quizWrapperRef={quizWrapperRef} key={question.id} question={question} />)
                }
            </div>
            <div className={styles.quizButtonsWrapper}>
                {!isFirstQuestion() && <Button variant="contained" onClick={decreaseStep}>Previous Question</Button>}
                {isLastQuestion() && <Button variant="contained" color="success" onClick={submitQuiz}>Submit</Button>}
                {!isLastQuestion() && <Button variant="contained" onClick={increaseStep}>Next Question</Button>}
            </div>
        </div >
    )
}

export default Quiz
