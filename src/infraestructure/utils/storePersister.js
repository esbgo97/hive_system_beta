const initialState = {
    main: {
        isLoading: false,
        showMenu: false,
        message: "",
        notification: {
            show: false,
            message: ""
        }
    },
    alert: {
        show: false,
        type: "",
        message: ""
    },
    request: {
        url: "",
        description: "",
        data: null,
        isOk: false,
        response: null,
    },
    auth: {
        isLogged: false,
        user: null,
        token: null,
        routes: []
    }
}

export const getState = () => {
    try {
        const serializedState = localStorage.getItem("__hive_system_state__")
        if (serializedState === null || serializedState === "null") {
            return initialState
        }
        return JSON.parse(serializedState)

    } catch (e) {
        return initialState
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("__hive_system_state__", serializedState)
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}
