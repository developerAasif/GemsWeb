import {HOME_BANNER_SUCCESS  } from '../constant/homeConstant.js'
import { homeAction } from '../actions/homeAction.js';



let initialState = {
   
};


const HomeReducer = function (state = initialState, action) {
    switch (action.type) {
        case HOME_BANNER_SUCCESS:
    
            return {
                ...state,
            };
      
            
        default:
            return state;
    }
};

export default HomeReducer;
    
  