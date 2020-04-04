import { getState } from "../../infraestructure/utils/storePersister";
import { START_REQUEST, END_REQUEST } from './types'

const requestReducer = (state = getState().request, action) => {
    switch (action.type) {
        case START_REQUEST:
            return {
                ...state,
                url: action.payload.url,
                description: action.payload.description,
                data: action.payload.data
            }

        case END_REQUEST:
            return {
                ...state,
                isOk: action.payload.isOk,
                response: action.payload.response
            }

        default:
            return { ...state }

    }

}

export default requestReducer