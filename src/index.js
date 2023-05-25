import React from "react";
import ReactDOM from 'react-dom/client';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";
import App from './App';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const store = createStore(
    allReducers,
    {
        products: [{name: "iPhone"}],
        user: "Adrian"
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserAction = {
    type : 'updateUser',
    payload : {
        user : "John"
    }
}
const updateProductAction = {
    type : 'updateProduct',
    payload : [{name : 'IphoneX'}]
}
store.dispatch(updateUserAction);
store.dispatch(updateProductAction);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App aRandomProp="whatever"/></Provider>);
