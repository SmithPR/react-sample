import React, { useState, useEffect } from 'react';
import { Container, Header } from "semantic-ui-react";

import userService from '../services/userService.js';
import ProfileView from './profile/ProfileView.js';
import NoData from './profile/NoData.js';
import Loading from './profile/Loading.js';
import ModalForm from './profile/ModalForm.js';

const useUser = function(){
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //Initial user fetch
    //Second argument is needed to prevent this from running during every render
    useEffect(()=>{
        userService.getUser()
            .then( setUser )
            .catch( err=>true )
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
            return Promise.reject('The form is invalid.  Please check all fields and try again.');
        }
    }

    return { user, saveUser, loading };
};

const getContent = function({user, loading, toggleModal}){
    if(loading){
        //Show loading state
        return (
            <Loading />
        );
    }else if(!user){
        //Show no-data state
        return (
            <NoData toggleModal={toggleModal} />
        );
    }else{
        //Show user profile
        return (
            <ProfileView user={user} toggleModal={toggleModal} />
        );
    }
};

const Profile = () => {
    const { user, saveUser, loading } = useUser();
    const [ modalOpen, setModalOpen ] = useState(false);
    
    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <React.Fragment>

            {/* Page header */}
            <Container text style={{ marginTop: '7em' }}>
                <Header as="h1" dividing>
                Your Profile
                </Header>
                <p>View and edit your personal information.</p>
            </Container>
            
            {/* Page content */}
            <Container text style={{ marginTop: '2em' }}>
                { getContent({ user, loading, toggleModal }) }
            </Container>

            {/* Editor Modal */}
            <ModalForm user={user} saveUser={saveUser} modalOpen={modalOpen} toggleModal={toggleModal} />

        </React.Fragment>
    );
};

export default Profile;
