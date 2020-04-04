import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = (props) => {
    if (props.isLogged) {
        return <Route path={props.path} exact component={props.component} />
    }
    return <Redirect to="/Login" />
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}

export default connect(mapStateToProps)(PrivateRoute)