import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import dataReducer from "./reducer/reducer";
import watcherSaga from "./saga/saga";

const reducer = combineReducers({
    dataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
