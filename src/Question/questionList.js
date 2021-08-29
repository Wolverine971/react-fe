import axios from "axios";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Question from "./question";

import { addQuestions } from "../store/questions/questions";

export default function QuestionList() {
  const questions = useSelector((state) => state.questions.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/question/all/10/`).then((res) => {
      dispatch(addQuestions(res.data.questions));
    });
  }, [dispatch]);

  if (questions && questions.length > 0) {
    return (
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <Question question={question} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>loading</div>;
  }
  
}
