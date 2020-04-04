import { SHOW_ALERT, HIDE_ALERT } from "./types"

export const ShowAlert = (type, message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                type,
                message
            }
        })
    }
}

export const HideAlert = () => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_ALERT
        })
    }
}

export const ShowOkAlert = (message) => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_ALERT,
            payload: {
                type:"success",
                message
            }
        })
    }
}

export const ShowInfoAlert = (message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                type: "info",
                message
            }
        })
    }
}

export const ShowWarnAlert = (message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                type: "warn",
                message
            }
        })
    }
}

export const ShowErrorAlert = (message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                type: "error",
                message
            }
        })
    }
}