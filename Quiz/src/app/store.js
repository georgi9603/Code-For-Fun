import { configureStore } from '@reduxjs/toolkit'

import quizQuiestionsReducer from './features/quizQuestions'

export default configureStore({
  reducer: {
    quizQuiestions: quizQuiestionsReducer
  }
})
