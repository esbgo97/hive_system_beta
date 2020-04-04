import React from 'react'
import { connect } from 'react-redux'

//Routes Type
import { PrivateRoute } from './PrivateRoute'

//Pages
import Home from '../../ui/pages/main/Home'
import Login from '../../ui/pages/auth/Login'
import SignUp from '../../ui/pages/auth/SignUp'
import Dashboard from '../../ui/pages/common/Dashboard'

const registeredComponents = {
    "Home": Home,
    "Login": Login,
    "SignUp": SignUp,
    "Dashboard": Dashboard
}

const defaultRoutes = [
    { type: "public", path: "/", name: "Home" },
    { type: "public", path: "/Login", name: "Login" },
    { type: "public", path: "/SignUp", name: "SignUp" },
    { type: "private", path: "/Dashboard", name: "Dashboard" },
    
]


const Routes = () => {
    let result = defaultRoutes.map((r, i) => {
        if (r.type === "public") {
            return  <Route path={r.path} exact component={registeredComponents[r.name]} />
        } else {
            return <PrivateRoute key={k} path={r.path} component={registeredComponents[r.name]} />
        }
    })
    return (<>{result}</>)
}

const mapStateToProps = (state) => {
    return {
        Routes: state.auth.routes || routes
    }
}
export default connect(mapStateToProps)(Routes)
