import { getState } from "../../infraestructure/utils/storePersister"
import { SIGN_IN, SIGN_OUT } from "./types"

const authReducer = (state = getState().auth, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLogged: true,
                user: action.payload.user,
                token: action.payload.token,
                routes:action.payload.routes
            }

        case SIGN_OUT:
            return {
                ...state,
                isLogged: false,
                user: null,
                token: null,
                routes: []
            }
        default:
            return { ...state }
    }

}

export default authReducer