import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess, tickClock, saveProperties } from './actions'
import {xRead} from 'src/entity' 
//D:\Work\nextjs-blog\src\entity.ts
import { HTTP_METHOD } from 'commons';
//import {ctx} from 'pages/property/[id]'
//import * as Api from '../api/taskApi'
import  updateTask from 'pages/property/[id]'
 


function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}



function * fetchAllProperties () {
  while (true) {
      const data = yield take(actionTypes.FETCH_ALL_PROPERTIES); 
    //  console.log('datafetch',data)
  //  {id:query.id}
      const info = yield call(xRead, '/properties/all', HTTP_METHOD.GET);
      yield put(saveProperties(info.response.data));
  }
};


function * fetchIdProperties () {
  while (true) {
    console.log('fetchidproperties');
      const data = yield  take(actionTypes.FETCH_ID_PROPERTIES); 
     // console.log('data',data);
      //const { payload } = actions
     // const { data: { data } } = yield  updateTask(payload.data, payload.id)
      console.log('datafetchid iz datu',data)
    //  const  {query} = ctx; 
      const info = yield call(xRead, '/properties/edit',{id:data.payload.id}, HTTP_METHOD.POST);
   //const info = yield call(xRead, '/properties/edit','251', HTTP_METHOD.GET);
    console.log('info',info);
      yield put(saveProperties(info.response.data));
  }
};



/*function * fetchIdProperties1 () {
  while (true) {
      const data = yield take(actionTypes.FETCH_ID_PROPERTIES); 
    //  const { payload } = actions
    //  const { data: { data } } = yield Api.updateTask(payload.data, payload.id)
      console.log('datafetch',data)
     // const  {query} = ctx; 
      const info = yield call(xRead, '/properties/edit',{id}, HTTP_METHOD.GET);
      yield put(saveProperties(info.response.data));
  }
};*/






function* rootSaga() {
  yield all([
    call(runClockSaga),
    call (fetchAllProperties),
    call(fetchIdProperties),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ])
}



export default rootSaga
//export default fetchAllProperties