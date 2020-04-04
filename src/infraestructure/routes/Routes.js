import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Routes Type
import PrivateRoute from './PrivateRoute'

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
    // { type: "private", path: "/Dashboard", name: "Dashboard" },    
]


const Routes = () => {
    let result = defaultRoutes.map((r, i) => {
        if (r.type === "public") {
            return  <Route key={i} path={r.path} exact component={registeredComponents[r.name]} />
        } else {
            console.log(r)
            return <PrivateRoute key={i} path={r.path} component={registeredComponents[r.name]} />
        }
    })
    return (<Router>
        {result}
    </Router>)
}

export default Routes
