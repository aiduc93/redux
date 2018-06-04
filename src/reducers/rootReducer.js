import { combineReducers } from 'redux';
import todosReducers from './sub-reducers/todosReducers';

const rootReducer = combineReducers({
    todosReducers
});

export default rootReducer;