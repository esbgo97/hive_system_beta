import React from 'react'
import EmptyTemplate from '../../layout/templates/EmptyTemplate'
import AppForm from '../../layout/partials/AppForm';
import { connect } from 'react-redux';
import { SignUp } from '../../../store/auth/actions';
import { ShowWarnAlert } from '../../../store/alert/actions';

const SignUpPage = (props) => {
    const formFields = [
        {
            name: "email",
            placeholder: "Email",
            type: "email",
            icon: "mail"
        },
        {
            name: "pass",
            placeholder: "Password",
            type: "password",
            icon: "lock"
        },
    ]
    const handleSubmit = async (data) => {
        if (data.email === "" || data.pass === "") {
            props.showWarn("Please complete the form!")
            return
        }
        props.signUp(data.email, data.pass)
    }
    const handleCancel = () => {
        props.history.push("/")
    }
    return (<EmptyTemplate title="Hive System Beta">
        <br />
        <AppForm width="400px"
            title="Sign Up Here!"
            fields={formFields}
            onAccept={handleSubmit}
            onCancel={handleCancel} />
    </EmptyTemplate>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (email, pass) => dispatch(SignUp(email, pass)),
        showWarn: (message) => dispatch(ShowWarnAlert(message))
    }
}
export default connect(null, mapDispatchToProps)(SignUpPage)