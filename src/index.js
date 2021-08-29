import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import  QuestionList  from "./Question/questionList.js";
import { store } from './store/store'

import "./index.css";

// const { QuestionList } = import('./Question/questionList.js')
// ========================================

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QuestionList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
