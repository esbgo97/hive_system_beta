import React from 'react'
import { withRouter } from 'react-router'
import { EmptyTemplate } from '../../layout/templates/EmptyTemplate'
import { Typography, Button, Row, Col } from 'antd'

const HomePage = (props) => {
    console.log(props)
    return (<EmptyTemplate title="Welcome to Hive System">
        <Row>
            <Col span={12} offset={6}>
                {/* <Button type="primary"
                        onClick={() => props.navigation.navigate("/Login")}>
                        Login Here!
                        </Button>
                    <Button type="link"
                        onClick={() => props.navigation.navigate("/SignUp")}>
                        or Sign Up Here!
                     </Button> */}
            </Col>
        </Row>
    </EmptyTemplate>)
}

export default withRouter(HomePage) 
