import React from 'react'
import { withRouter } from 'react-router'
import { EmptyTemplate } from '../../layout/templates/EmptyTemplate'
import { Button } from 'antd'

const HomePage = (props) => {
    console.log(props)
    return (<EmptyTemplate title="Welcome to Hive System">
        <br /><br /><br />
        <Button type="primary"
            onClick={() => props.history.push("/Login")}>
            Login Here!
                        </Button>
        <Button type="link"
            onClick={() => props.history.push("/SignUp")}>
            or Sign Up Here!
                     </Button>
    </EmptyTemplate>)
}

export default withRouter(HomePage) 
