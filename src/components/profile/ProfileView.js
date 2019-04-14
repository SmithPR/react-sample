import React from 'react';
import { Header, Segment, Icon, Grid, Button } from "semantic-ui-react";

const formatDegreeType = degreeType => {
    switch(degreeType){
        case 'bs':
            return 'Bachelor\'s Degree';
        case 'ms':
            return 'Master\'s Degree';
        case 'phd':
            return 'Doctorate';
        case 'hs':
        default:
            return 'High School';
    }
};

const ProfileView = ({user, toggleModal}) => (
    <React.Fragment>
        <Segment.Group>
            <Segment style={{paddingBottom: '2em'}}>

                {/* name (header) */}
                <Header size='medium'><Icon name="user" /> {user.firstName} {user.lastName}</Header>
                <Grid columns={2} stackable>

                    {/* Address */}
                    <Grid.Column>
                        <b>Address:</b>&nbsp; {user.address}
                    </Grid.Column>
                    
                    {/* Phone Number */}
                    <Grid.Column>
                        <b>Phone number:</b>&nbsp; {
                            `(${user.phoneNumber.substring(0,3)})${user.phoneNumber.substring(3,6)}-${user.phoneNumber.substring(6)}`
                        }
                    </Grid.Column>
                    
                    {/* Age */}
                    { user.age && 
                        <Grid.Column>
                            <b>Age:</b>&nbsp; {user.age}
                        </Grid.Column> 
                    }
                    
                    {/* Height */}
                    { user.height && 
                        <Grid.Column>
                            <b>Height:</b>&nbsp; {`${Math.floor(user.height/12)}'${user.height%12}"`}
                        </Grid.Column> 
                    }
                    
                    {/* Date of Birth */}
                    <Grid.Column>
                        <b>Date of Birth:</b>&nbsp; {user.dateOfBirth}
                    </Grid.Column>

                </Grid>
            </Segment>
            { user.degreeType && 
                <Segment style={{paddingBottom: '2em'}}>
                    <Header size='medium'><Icon name="graduation cap" />Education</Header>
                    <p>
                        <b>{formatDegreeType(user.degreeType)}</b>{ user.degreeField && ` in ${user.degreeField}`}
                        <span>&nbsp; ({ user.degreeCompleted ? 'Completed': 'Incomplete' })</span>
                    </p>
                </Segment>
            }
        </Segment.Group>
        <Button onClick={toggleModal}><Icon name="pencil" />&nbsp;Edit</Button>
    </React.Fragment>
);

export default ProfileView;