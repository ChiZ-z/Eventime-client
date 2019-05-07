import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import EventsBoard from './Events';
import Login from './Login';
import Registration from './Registration';
import AddEvent from './AddEvent';
import base64 from 'react-native-base64'
class Navbar extends Component {
    state = { activeItem: 'Eventime' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })

    }
    CheckServer() {
        fetch("http://localhost:8080/", {
            headers: new Headers({
              'Authorization': `Basic ${base64.encode(`user:1`)}`
            }),
          }).then(res => {
            alert("Received Successful response from server!");
        }, err => {
            alert("Server rejected response with: " + err);
        });
    }

    render() {
        const { activeItem } = this.state
        return (
            <Router>
                <div>
                    <Menu pointing stackable>
                        <Menu.Item>
                            <img src='https://react.semantic-ui.com/logo.png' />
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            name='events'
                            active={activeItem === 'events'}
                            to='/events'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            name='AddEvent'
                            active={activeItem === 'AddEvent'}
                            to='/AddEvent'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item>
                            <Button className='buttonTest' onClick={this.CheckServer}>Click Me</Button>
                        </Menu.Item>
                        <Menu.Item position='right'
                            as={Link}
                            name='login'
                            active={activeItem === 'login'}
                            to='/login'
                            onClick={this.handleItemClick} />
                    </Menu>
                    <Route exact path="/events" component={EventsBoard} />
                    <Route exact path="/addevent" component={AddEvent} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                </div >
            </Router >
        );
    }
}

export default Navbar;
