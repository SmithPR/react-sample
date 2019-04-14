import React, { useState } from 'react';
import { Modal, Button, Form, Checkbox } from "semantic-ui-react";
import { DateInput } from 'semantic-ui-calendar-react';

const ModalForm = ({ modalOpen, toggleModal, user }) => {
    return (
        <Modal open={modalOpen} onClose={toggleModal} closeOnEscape={false} 
            closeOnDimmerClick={false} >

            <Modal.Header>{user ? 'Update Profile' : 'Create Profile'}</Modal.Header>
            <Modal.Content scrolling>
                <Form id="modalForm" onSubmit={()=>{console.log('Form submitted')}}>

                    <Form.Group widths="equal">
                        <Form.Input fluid required label="First name" placeholder="First name" pattern="[A-Za-z]+" />
                        <Form.Input fluid required label="Last name" placeholder="Last name" pattern="[A-Za-z]+" />
                    </Form.Group>

                    <Form.Group widths="equal">
                        <Form.Input fluid required label="Phone number" placeholder="10-digit Phone number"
                            pattern="[0-9]+" minLength="10" maxLength="10" type="tel" />
                        <Form.Input fluid required label="Address" placeholder="Address" />
                    </Form.Group>

                    <Form.Group inline style={{marginTop: '3em'}}>
                        <DateInput label="Date of birth" required name="date"
                            value={''} popupPosition="right center"
                            placeholder="Date of birth" closable startMode="year"/>
                        <Form.Input type="number" label="Age" placeholder="Age" />
                        <Form.Input type="number" label="Height" placeholder="Height (in.)" />
                    </Form.Group>

                    <Form.Group inline style={{marginTop: '3em'}}>
                        <Form.Field label="Highest level of Education" control="select">
                            <option value="hs">High School</option>
                            <option value="bs">Bachelor's Degree</option>
                            <option value="ms">Master's Degree</option>
                            <option value="phd">Doctorate</option>
                        </Form.Field>
                        <Form.Input label="Specialization" placeholder="Specialization" />
                        <Form.Field control={Checkbox} label={{ children: 'Diploma Received'}} />
                    </Form.Group>
                    
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button primary type="submit" form="modalForm">Save</Button>
                <Button onClick={toggleModal}>Cancel</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalForm;
