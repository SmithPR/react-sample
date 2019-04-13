import React from 'react';

import { Segment, Header, Icon, Button } from "semantic-ui-react";

const NoData = ({ toggleModal }) => {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='user outline' />
                Hi!  You must be new here.
            </Header>
            <Button primary onClick={toggleModal}>Create Profile</Button>
        </Segment>
    );
}

export default NoData;