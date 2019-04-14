import React, { useState } from 'react';
import { Modal, Button, Form, Checkbox } from "semantic-ui-react";

const ModalForm = ({ modalOpen, toggleModal, user }) => {

    return (
        <Modal open={modalOpen} onClose={toggleModal}>
            <Modal.Header>{user ? 'Update Profile' : 'Create Profile'}</Modal.Header>
            <Modal.Content scrolling>
                <Form>

                    <Form.Group widths="equal">
                        <Form.Input fluid required label="First name" placeholder="First name" />
                        <Form.Input fluid required label="Last name" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group widths="equal">
                        <Form.Input fluid required label="Phone number" placeholder="Phone number" />
                        <Form.Input fluid required label="Address" placeholder="Address" />
                    </Form.Group>

                    <Form.Group inline style={{marginTop: '3em'}}>
                        <Form.Input required label="Date of birth" placeholder="Date of birth" />
                        <Form.Input label="Age" placeholder="Age" />
                        <Form.Input label="Height" placeholder="Height" />
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
                <Button primary>Save</Button>
                <Button>Cancel</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalForm;
