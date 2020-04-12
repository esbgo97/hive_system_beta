import { START_REQUEST, END_REQUEST } from './types'
import { ShowLoading, HideLoading } from '../main/actions'
export const StartRequest = (description, url, data) => {
    return async (dispatch) => {
        dispatch(ShowLoading(description))
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
        dispatch(HideLoading())
        dispatch({
            type: END_REQUEST,
            payload: {
                isOk,
                response
            }
        })
    }
}
