import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({//把reducer结合在一起。
    books:BooksReducer,
    activeBook: ActiveBook//改变key值，key是application state的property
});

export default rootReducer;
