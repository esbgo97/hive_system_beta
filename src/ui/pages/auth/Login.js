import React from 'react'
import EmptyTemplate from '../../layout/templates/EmptyTemplate'
import AppForm from '../../layout/partials/AppForm';
import { Icon } from 'antd'
import { connect } from 'react-redux';
import { SignIn } from '../../../store/auth/actions';
import { ShowWarnAlert } from '../../../store/alert/actions';

const LoginPage = (props) => {
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
        {
            name: "rememberMe",
            placeholder: "Remember Me",
            type: "check",
        }
    ]
    const handleSubmit = async (data) => {
        console.log(data)
        if (data.email === "" || data.pass === "") {
            props.showWarn("Please complete the form!")
            return
        }
        props.signIn(data.email, data.pass)
    }
    const handleCancel = () => {
        props.history.push("/SignUp")
    }
    return (<EmptyTemplate title="Hive System Beta">
        <br />
        <AppForm width="400px"
            title="Login Here!"
            fields={formFields}
            onAccept={handleSubmit}
            onCancel={handleCancel} />
        <Icon type="closecircle" />
    </EmptyTemplate>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, pass) => dispatch(SignIn(email, pass)),
        showWarn: (message) => dispatch(ShowWarnAlert(message))
    }

}
export default connect(null, mapDispatchToProps)(LoginPage)