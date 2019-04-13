import React, { Component } from 'react';

import { Container, Header } from "semantic-ui-react";

const App = () => {
    return (
        <Container text style={{ marginTop: '7em' }}>
            <Header as="h1" dividing>
            Your Profile
            </Header>
            <p>View and edit your personal information.</p>
        </Container>
    );
};

export default App;
