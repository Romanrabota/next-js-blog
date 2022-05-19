import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, {Task, END} from 'redux-saga'
//import createSagaMiddleware from 'next-redux-saga'
import { serialize, deserialize } from 'json-immutable';

import {MakeStore, createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducer'
import rootSaga from './saga'
//import fetchAllProperties  from './saga'

export interface SagaStore  {
  sagaTask?: Task;
  runSaga: () => void;
}

declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// export const makeStore = (context) => {
//   const sagaMiddleware = createSagaMiddleware()
//   //const store:any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
//   const store:any= createStore(rootReducer, bindMiddleware([sagaMiddleware]))
//   store.sagaTask = sagaMiddleware.run(rootSaga)
//   //(store as any).sagaTask = sagaMiddleware.run(rootSaga)
//   // console.log('store1:',store);
//   return store
// }

export const makeStore: MakeStore<any> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(
      applyMiddleware(sagaMiddleware)
      // other store enhancers if any
  );

  const store = createStore(rootReducer, enhancer) as SagaStore;
  store.sagaTask = sagaMiddleware.run(rootSaga);
  
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  

  return store;
};

const wrapper = createWrapper(makeStore,  { 
  serializeState: state => {
      return state === Object(state) ? serialize(state) : state;
  },
  deserializeState: state => {
      return state === Object(state) ? state : deserialize(state);
  }
});
export default wrapper;


// export const wrapper = createWrapper(makeStore, { debug: true })
