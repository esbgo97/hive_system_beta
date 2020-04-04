import { SIGN_IN, SIGN_OUT } from "./types"

export const SignIn = (user, token, routes) => {
    return async (dispatch) => {
        dispatch({
            type: SIGN_IN,
            payload: {
                user,
                token,
                routes
            }
        })
    }
}

export const SignOut = () => {
    return async (dispatch) =>{
        dispatch({
            type:SIGN_OUT
        })
    }
}