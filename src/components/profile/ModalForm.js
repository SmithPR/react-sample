import React, { useState } from 'react';
import { Modal, Form } from "semantic-ui-react";

const ModalForm = ({ modalOpen, toggleModal, user }) => {

    return (
        <Modal open={modalOpen} onClose={toggleModal}>
            <Modal.Header>{user ? 'Update Profile' : 'Create Profile'}</Modal.Header>
            <Modal.Content>
                Test
            </Modal.Content>
        </Modal>
    );
};

export default ModalForm;
