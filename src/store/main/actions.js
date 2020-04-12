import {
    SHOW_LOADING, HIDE_LOADING,
    SHOW_NOTIFICATION, HIDE_NOTIFICATION,
    TOGGLE_MENU
} from "./types"

export const ToggleMenu = () => {
    return async (dispatch) => {
        dispatch({
            type:TOGGLE_MENU
        })
    }
}

export const ShowLoading = (message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING,
            payload: {
                message
            }
        })
    }
}

export const HideLoading = () => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const ShowNotification = (type, message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: {
                message
            }
        })
    }
}

export const HideNotification = () => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_NOTIFICATION
        })
    }
}
