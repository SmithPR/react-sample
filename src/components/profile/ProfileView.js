import React from 'react';
import { Header, Segment, Icon, Grid } from "semantic-ui-react";

const formatDegreeType = degreeType => {
    switch(degreeType){
        case 'hs':
            return 'High School';
        case 'bs':
            return 'Bachelor\'s Degree';
        case 'ms':
            return 'Master\'s Degree';
        case 'phd':
            return 'Doctorate'
    }
};

const ProfileView = ({user}) => (
    <Segment.Group>
        <Segment>

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
                        `(${user.phoneNumber.substring(0,3)})${user.phoneNumber.substring(3,7)}-${user.phoneNumber.substring(7)}`
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
            </Grid>
        </Segment>
        { user.degreeType && 
            <Segment>
                <Header size='medium'><Icon name="graduation cap" />Education</Header>
                <p>
                    <b>{formatDegreeType(user.degreeType)}</b>{ user.degreeField && ` in ${user.degreeField}`}
                    <span>&nbsp; ({ user.degreeCompleted ? 'Completed': 'Incomplete' })</span>
                </p>
            </Segment>
        }
    </Segment.Group>
);

export default ProfileView;