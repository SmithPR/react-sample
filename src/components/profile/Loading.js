import React from 'react';
import { Segment, Placeholder } from "semantic-ui-react";

const Loading = ()=>(
    <Segment>
        <Placeholder style={{fontSize: '3em'}}>
            <Placeholder.Header />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder>
    </Segment>
);

export default Loading;