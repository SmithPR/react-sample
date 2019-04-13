import React, { Component } from 'react';
import './App.css';

import { Menu, Container } from "semantic-ui-react";

import Profile from './components/Profile.js'

const App = () => {
    return (
        <div className="App">
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as='a' header>
                        React Sample
                    </Menu.Item>
                </Container>
            </Menu>
    
            <Profile />

        </div>
    );
};

export default App;
