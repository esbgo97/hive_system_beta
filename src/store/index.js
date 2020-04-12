import { combineReducers, createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { createBrowserHistory } from 'history'

import { connectRouter, routerMiddleware } from 'connected-react-router'

import mainReducer from './main/reducers'
import alertReducer from './alert/reducers'
import requestReducer from './request/reducers'
import authReducer from './auth/reducers'

import { getState, saveState } from '../infraestructure/utils/storePersister'

export const history = createBrowserHistory()


const rootReducer = combineReducers({
    main: mainReducer,
    alert: alertReducer,
    request: requestReducer,
    auth:authReducer,
    router: connectRouter(history),
})

export const configureStore = () => {
    const initialState = getState()

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
         //   logger,
            routerMiddleware(history)
        )
    )


    store.subscribe(() => {
        const currentState = store.getState()
        saveState(currentState)
    })

    return store
}