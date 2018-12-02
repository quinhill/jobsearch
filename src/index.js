import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { config } from './firebase';


const store = createStore(rootReducer, 
  compose(
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, 
 getFirestore })),
      reduxFirestore(config),
      reactReduxFirebase(config)
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));