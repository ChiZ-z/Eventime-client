import React, { Component } from 'react'
import { Form, Grid, Header, Image } from 'semantic-ui-react'
import './Login.css'


class Login extends Component {
    render() {
        return (
                <div className='login-form'>
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='red' textAlign='center'> Log-in to your account</Header>
                            <Form size='large'>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Login' />
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                                <div class="col-md-6 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button victoria-two">Login</a> </div>
                                <div class="col-md-6 col-sm-3 col-xs-6"> <a href="/registration" class="btn btn-sm animated-button victoria-three">Register</a> </div>
                            </Form>
                        </Grid.Column>
                    </Grid>
                    <Image ui='imagelogin' src='https://www.smmmoney.com/img/login.gif' centered='true' />
                </div>
        )
    }
}

export default Login