import { getState } from "../../infraestructure/utils/storePersister"

import { SHOW_ALERT,HIDE_ALERT } from "./types"

const alertReducer = (state = getState().alert, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: {
                    show: true,
                    type: action.payload.type,
                    message: action.payload.message
                }
            }

        case HIDE_ALERT:
            return {
                ...state,
                alert: {
                    show: false,
                    type: "",
                    message: ""
                }
            }

        default:
            return { ...state };
    }
}

export default alertReducer
