import { GET_ALL_INFO, CLEAR } from "../actiontypes";

export const fetchedResponse = response => ({
    type: GET_ALL_INFO,
    payload: {
        info: response
    }
})

export const clearResponse = () => ({
    type: CLEAR,
    payload: {
        info: null
    }
})

