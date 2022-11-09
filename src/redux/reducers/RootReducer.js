import { combineReducers } from 'redux'
import HomeReducer from './homeReducer';





const appReducer = combineReducers({
    home: HomeReducer,
})
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state, action) => {
    const stateCopy = action.type === "LOGOUT" ? undefined : { ...state }
    return appReducer(stateCopy, action)
  }
  