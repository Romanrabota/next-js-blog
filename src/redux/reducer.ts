import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'
import {fetchAllProperties,saveProperties} from './actions'
import {FETCH_ALL_PROPERTIES,SAVE_PROPERTIES,action,} from './actions'
import { AnyAction } from 'redux';
//import{properties } from  './saga'


const nextReducer = (state: any = {app: 'init', page: 'init'}, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === 'init') delete action.payload.app;
      if (action.payload.page === 'init') delete action.payload.page;
      return {...state, ...action.payload};
    case 'APP':
      return {...state, app: action.payload};
    case 'PAGE':
      return {...state, page: action.payload};
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  properties:null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

     case actionTypes.SAVE_PROPERTIES:
       console.log('action',action.properties.length)
      return { ...state, 
       properties:action.properties,
      }

      case actionTypes.FETCH_ALL_PROPERTIES:        
        return { ...state, 
         ...{properties:action.properties},
        }

        /*case actionTypes.FETCH_ID_PROPERTIES:        
        return { ...state, 
         ...{properties:action.properties},
        }*/

        case actionTypes.FETCH_ID_PROPERTIES:        
        return { ...state, 
          ...{properties:action.properties},
        }

       
    /*  case SAVE_PROPERTIES:
      return { ...state, pro:properties}

      case FETCH_ALL_PROPERTIES:
        return { ...state, pro:properties}*/

      default:
      return state
  }
}
function rootReducer(state, action) {
  const intermediateState = reducer(state, action);
  const finalState = nextReducer(intermediateState, action);
  return finalState;
}

export default rootReducer;