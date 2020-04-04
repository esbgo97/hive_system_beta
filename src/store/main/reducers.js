import { getState } from '../../infraestructure/utils/storePersister'
import {
    SHOW_LOADING, HIDE_LOADING,
    SHOW_NOTIFICATION, HIDE_NOTIFICATION
} from "./types"

const initialState = getState().main

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
                message: action.payload.message,
            }

        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
                message: ""
            }

        case SHOW_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: true,
                    message: action.payload.message
                }
            }

        case HIDE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: false,
                    message: ""
                }
            }

        default:
            return { ...state }
    }
}

export default mainReducer