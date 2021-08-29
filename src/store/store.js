import { createStore } from 'redux';
import questionsState from './questions/questions';

export const store = createStore(questionsState);