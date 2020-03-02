import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './login/reducers';
import { logoutReducer } from './logout/reducers';
import { aboutReducer } from './about/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';  // бибилтотека асинхр actions

const rootReducer = combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  about: aboutReducer,
});

const middleWare = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(
  rootReducer,
  undefined,
  middleWare
);