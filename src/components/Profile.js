import React, { useState, useEffect } from 'react';

import { Container, Header } from "semantic-ui-react";

import userService from '../services/userService.js';

const useUser = function(){
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //Initial user fetch
    //Second argument is needed to prevent this from running during every render
    useEffect(()=>{
        userService.getUser()
            .then( setUser )
            .finally( ()=>setLoading(false) );
    }, []);

    //Save user function
    const saveUser = function(user){
        let saveUserResult;
        setLoading(true);

        saveUserResult = saveUser(user);

        if(saveUserResult){
            return saveUserResult
                .then( ()=>setUser(user) )
                .finally( ()=> setLoading(false) );
        }else{
            //Call failed entry checks
            setLoading(false);
            return Promise.reject();
        }
    }

    return { user, saveUser, loading };
};

const App = () => {
    const { user, saveUser, loading } = useUser();
    return (
        <Container text style={{ marginTop: '7em' }}>
            <Header as="h1" dividing>
            Your Profile
            </Header>
            <p>View and edit your personal information.</p>
            <p>Loading: { loading ? 'True': 'False' }</p>
            <p>User: { user ? JSON.stringify(user) : 'Not found' }</p>
        </Container>
    );
};

export default App;
