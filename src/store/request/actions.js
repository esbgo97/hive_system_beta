import { START_REQUEST, END_REQUEST } from './types'

export const StartRequest = (description, url, data) => {
    return async (dispatch) => {
        dispatch({
            type: START_REQUEST,
            payload: {
                description,
                url,
                data
            }
        })
    }
}

export const EndRequest = (isOk, response) => {
    return async (dispatch) => {
        dispatch({
            type: END_REQUEST,
            payload: {
                isOk,
                response
            }
        })
    }
}
