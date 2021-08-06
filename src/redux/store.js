import {createStore} from 'redux';
import {reducer} from './reducer';

export const state = createStore(reducer);