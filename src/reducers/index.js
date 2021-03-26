import arrayReducer from './array';
import {combineReducers} from 'redux';
import users from './users';

const allReducers = combineReducers({
    array: arrayReducer,
    users: users
})

export default allReducers;