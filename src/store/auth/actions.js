import { SIGN_IN, SIGN_OUT } from "./types"
import AuthService from '../../services/authService'
import { StartRequest, EndRequest } from "../request/actions"
import { ShowErrorAlert } from "../alert/actions"

const serviceInstance = new AuthService()
export const SignIn = (user, pass) => {
    return async (dispatch) => {
        let resp = null
        let isOk = true;
        try {
            dispatch(StartRequest("Login In...", "firebase/auth", { user, pass }))
            resp = await serviceInstance.singIn(user, pass)
            console.log(resp)
            dispatch({
                type: SIGN_IN,
                payload: {
                    user: {},
                    token: "prueba",

                }
            })
        } catch (err) {
            dispatch(ShowErrorAlert(err.message))
            isOk = false
            resp = err
        } finally {
            dispatch(EndRequest(isOk, resp))
            return resp
        }
    }
}

export const SignOut = () => {
    return async (dispatch) => {
        try {
            dispatch(StartRequest("Sign Out...", "firebase/auth"))
            await serviceInstance.singOut()
            dispatch({ type: SIGN_OUT })
        }
        catch (err) {
            console.log(err)
            dispatch(ShowErrorAlert(err.message))
        } finally {
            dispatch(EndRequest())
        }

    }
}