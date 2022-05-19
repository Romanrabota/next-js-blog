import { Action } from "redux";

export const actionTypes = {
    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    START_CLOCK: 'START_CLOCK',
    TICK_CLOCK: 'TICK_CLOCK',
    HYDRATE: 'HYDRATE',
    FETCH_ALL_PROPERTIES : 'FETCH_ALL_PROPERTIES',
    SAVE_PROPERTIES: 'SAVE_PROPERTIES',
    FETCH_ID_PROPERTIES:'FETCH_ID_PROPERTIES',
    UPDATE_TASK_REQUEST:'UPDATE_TASK_REQUEST',
  }
  
  export   const   FETCH_ALL_PROPERTIES = 'FETCH_ALL_PROPERTIES';
  export   const   SAVE_PROPERTIES=  'SAVE_PROPERTIES';
  export   const   FETCH_ID_PROPERTIES= 'FETCH_ID_PROPERTIES';

  export function failure(error) {
    return {
      type: actionTypes.FAILURE,
      error,
    }
  }
  
  export function increment() {
    return { type: actionTypes.INCREMENT }
  }
  
  export function decrement() {
    return { type: actionTypes.DECREMENT }
  }
  
  export function reset() {
    return { type: actionTypes.RESET }
  }
  
  export function loadData() {
    return { type: actionTypes.LOAD_DATA }
  }
  
  export function loadDataSuccess(data) {
    return {
      type: actionTypes.LOAD_DATA_SUCCESS,
      data,
    }
  }
  
  export function startClock() {
    return { type: actionTypes.START_CLOCK }
  }
  
  export function tickClock(isServer) {
    return {
      type: actionTypes.TICK_CLOCK,
      light: !isServer,
      ts: Date.now(),
    }
  }


  export const updateTaskRequest = (data, id) => ({
    type: actionTypes.UPDATE_TASK_REQUEST,
    payload: { data, id }
})


  /*export function saveProperties(data) {
    return {
      type: actionTypes.SAVE_PROPERTIES,
      data,
    }
  }*/

 /* export function fetchAllProperties() {
    return { type: actionTypes.FETCH_ALL_PROPERTIES,
    }
  }*/


  export function action(type: string, payload = {}): Action {    
  return {type, ...payload};
}


export const fetchAllProperties = () => action(FETCH_ALL_PROPERTIES, {});
export const saveProperties = (data) => action(SAVE_PROPERTIES, {properties:data});
export const fetchIdProperties = () => action(FETCH_ID_PROPERTIES,{});