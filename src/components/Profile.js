import React, { useState, useEffect } from 'react';
import { Container, Header } from "semantic-ui-react";

import userService from '../services/userService.js';
import NoData from './profile/NoData.js';

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
        const saveUserResult = userService.saveUser(user);

        if(saveUserResult){
            //Save is in progress
            return saveUserResult
                .then( ()=>setUser(user) );
        }else{
            //Call failed entry checks
            return Promise.reject();
        }
    }

    return { user, saveUser, loading };
};

const getContent = function({user, loading}){
    if(loading){
        //Show loading state
        return (
            <p>Loading&hellip;</p>
        );
    }else if(!user){
        //Show no-data state
        return (
            <NoData />
        );
    }else{
        //Show user profile
        return (
            <p>{JSON.stringify(user)}</p>
        );
    }
};

const Profile = () => {
    const { user, saveUser, loading } = useUser();
    return (
        <React.Fragment>
            <Container text style={{ marginTop: '7em' }}>
                <Header as="h1" dividing>
                Your Profile
                </Header>
                <p>View and edit your personal information.</p>
            </Container>
            
            <Container text style={{ marginTop: '2em' }}>
                { getContent({ user, loading }) }
            </Container>
        </React.Fragment>
    );
};

export default Profile;
