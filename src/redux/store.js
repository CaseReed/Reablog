import { createStore, applyMiddleware, combineReducers } from "redux";
import articleReducer from './articles/articleReducer';
import thunk from "redux-thunk";

// Déclaration du reducer principal, combineReducers permet d'en avoir plusieurs
const rootReducer = combineReducers({
    articleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;