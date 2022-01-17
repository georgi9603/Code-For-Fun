import React, { memo } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { addSelectedOption } from '../../../app/features/quizQuestions';
import { useDispatch, useSelector } from 'react-redux'
import ConfettiElement from '../../Atoms/Confetti';
import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from '../../../hooks/useWindowSize';

const useStyles = makeStyles(() => ({
    root: {
        fontSize: "1.5rem",
        fontWeight: 600
    }
}));

const RadioButtonsGroup = (props) => {
    const dispatch = useDispatch();
    const { id, questionText, options, selectedValue, correctAnswer } = props.question;
    const { quizWrapperRef } = props;
    const isChecked = useSelector(state => state.quizQuiestions.isChecked);
    const classes = useStyles();
    const { width, height } = useWindowSize(quizWrapperRef);

    const handleClick = (value) => {
        if (selectedValue === null) {
            dispatch(addSelectedOption({ questionId: id, selectedOption: value, isChecked }))
        }
    }

    const showConfetti = () => {
        return <ConfettiElement width={width} height={height}></ConfettiElement>
    }

    return (
        <div>
            <FormControl
                component="fieldset"
            >
                <FormLabel clasName={classes.root} >{questionText}</FormLabel>
                <RadioGroup
                    aria-label="quiz"
                    defaultValue={selectedValue}
                    value={selectedValue}
                    name="quiz-radio-buttons-group"
                    disabled={selectedValue !== null}
                >
                    {options.map((option, index) => <FormControlLabel
                        key={index}
                        value={option.value}
                        control={<Radio />}
                        disabled={selectedValue !== null}
                        label={option.label}
                        onClick={() => handleClick(option.value)}
                    />
                    )}
                </RadioGroup>
            </FormControl>
            {selectedValue !== null && +selectedValue === +correctAnswer && (
                <>
                    {showConfetti()}
                    <div>{`Correct! The right answer is ${options[selectedValue - 1].label}.`}</div>
                </>
            )}
            <div> {selectedValue !== null && +selectedValue !== +correctAnswer && `Sorry, you are wrong! The right answer is ${options[correctAnswer - 1].label}.`}</div>
        </div>
    );
}

export default memo(RadioButtonsGroup)