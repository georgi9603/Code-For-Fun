import { createSlice } from '@reduxjs/toolkit'

export const quizQuiestionsSlice = createSlice({
    name: 'quizQuestions',
    initialState: {
        isChecked: false,
        selectedOptions: [],
        choiceQuestions: [],
        yesOrNoQuestions: []
    },
    reducers: {
        setIsCheckedTrue: state => {
            state.isChecked = true
        },
        setIsCheckedFalse: state => {
            state.isChecked = false
        },
        addSelectedOption: (state, action) => {
            if (action.payload.isChecked) {
                const indexOfQuestion = state.yesOrNoQuestions.findIndex(question => question.id === action.payload.questionId);
                if (indexOfQuestion !== -1) state.yesOrNoQuestions[indexOfQuestion].selectedValue = action.payload.selectedOption;
            } else {
                const indexOfQuestion = state.choiceQuestions.findIndex(question => question.id === action.payload.questionId);
                if (indexOfQuestion !== -1) state.choiceQuestions[indexOfQuestion].selectedValue = action.payload.selectedOption;
            }

        },
        setChoiceQuestions: (state, action) => {
            state.choiceQuestions = action.payload
        },
        setYesOrNoQuestions: (state, action) => {
            state.yesOrNoQuestions = action.payload
        },
        restartQuizSession: (state, action) => {
            state.choiceQuestions = action.payload.toResetChoiceQuestions
            state.yesOrNoQuestions = action.payload.toResetYesOrNoQuestions
        }
    }
})

export const {
    setIsCheckedTrue,
    setIsCheckedFalse,
    addSelectedOption,
    setChoiceQuestions,
    setYesOrNoQuestions,
    restartQuizSession
} = quizQuiestionsSlice.actions

export default quizQuiestionsSlice.reducer