// FUCKING REDUX and fucking NGRX patterns
// Vue is way more clean and simple

import { combineReducers } from "redux";

// action type
const ADD_QUESTIONS = "ADD_QUESTIONS";
// action
export function addQuestions(questions) {
  console.log("state action ");
  return {
    type: ADD_QUESTIONS,
    questions,
  };
}

// default state, pretty self explanatory
const defaultState = {
  questions: [
    {
      author: { id: "60ad2db0ee6e1c5abc335974", enneagramId: "8" },
      commenterIds: {},
      comments: { comments: [], count: 0 },
      dateCreated: "2021-08-09T23:20:05.467Z",
      id: "p5s3LXsBbWBSS4uuUlw0",
      likes: ["60ad2db0ee6e1c5abc335974"],
      modified: false,
      question: "test Question",
    },
  ],
};
// reducer
function questions(state = defaultState, action) {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {
          ...state,
          questions: [...action.questions],
        };
    default:
      return state;
  }
}

const questionsState = combineReducers({
  questions,
});

export default questionsState;
