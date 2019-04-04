import React, { Component } from 'react';
import './App.css';

import { Menu, Container, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as='a' header>
              Example Site
            </Menu.Item>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Header as="h1" dividing>
            Your Profile
          </Header>
          <p>View and edit your personal information.</p>
        </Container>

      </div>
    );
  }
}

export default App;
