import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
// reducers put within combineReducers, form of destructuring
export default combineReducers({ alert, auth, profile, post });
