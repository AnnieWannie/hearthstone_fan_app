import { GET_ALL_INFO, CLEAR } from "../actiontypes";

const initialState = {
    classes: [],
    sets:[],
    types:[],
    factions:[],
    qualities:[],
    races:[],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_INFO: {
        const info  = action.payload.info
        console.log("GET_ALL_INFO case reached")
        return {
            classes: info.classes,
            sets: info.sets,
            types: info.types,
            factions: info.factions,
            qualities: info.qualities,
            races: info.races,    
        };
      }
      case CLEAR: {
        console.log("CLEAR case reached")
        return {
            classes: [],
            sets: [],
            types: [],
            factions: [],
            qualities: [],
            races: [],    
        };
      }
    default:
    return state;
  }
  }