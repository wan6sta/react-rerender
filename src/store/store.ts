import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);

export type RootState = ReturnType<typeof rootReducer>;
