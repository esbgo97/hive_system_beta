import { SIGN_IN, SIGN_OUT } from "./types"
import AuthService from '../../services/authService'
import { StartRequest, EndRequest } from "../request/actions"
import { ShowErrorAlert } from "../alert/actions"
import { push } from "connected-react-router"

const serviceInstance = new AuthService()
export const SignIn = (user, pass) => {
    return async (dispatch) => {
        let resp = null
        let isOk = true;
        try {
            dispatch(StartRequest("Loging In...", "firebase/auth", { user, pass }))
            resp = await serviceInstance.singIn(user, pass)

            dispatch({
                type: SIGN_IN,
                payload: {
                    user: resp.user,
                    token: resp.user.uid,
                    routes: [{ name: "Dashboard", path: "/Dashboard" }]
                }
            })
            dispatch(push("/Dashboard"))
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

export const SignUp = (email, pass) => {
    return async (dispatch) => {
        try {
            dispatch(StartRequest("Siging Up...", "firebase/auth"))
            let resp = await serviceInstance.signUp(email, pass)

            dispatch({
                type: SIGN_IN,
                payload: {
                    user: resp.user,
                    token: resp.user,

                }
            })
        } catch (err) {
            console.log(err)
            dispatch(ShowErrorAlert(err.message))
        } finally {
            dispatch(EndRequest())
        }
    }
}

export const SignOut = () => {
    return async (dispatch) => {
        try {
            dispatch(StartRequest("Signing Out...", "firebase/auth"))
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