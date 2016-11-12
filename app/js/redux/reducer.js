import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';

// import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import users from './modules/users';
import activeUser from './modules/active-user';
export default combineReducers({
    users: users,
    activeUser: activeUser,
    routing: routerReducer // 
});