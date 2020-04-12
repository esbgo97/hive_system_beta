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
        setTimeout(() => {
            dispatch(HideAlert())
        }, 5000)
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
                type: "success",
                message
            }
        })
        setTimeout(() => {
            dispatch(HideAlert())
        }, 5000)
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
        setTimeout(() => {
            dispatch(HideAlert())
        }, 5000)
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
        setTimeout(() => {
            dispatch(HideAlert())
        }, 5000)
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
        setTimeout(() => {
            dispatch(HideAlert())
        }, 5000)
    }
}