import React, { useState } from 'react';
import { Modal, Button, Form, Checkbox } from "semantic-ui-react";
import { DateInput } from 'semantic-ui-calendar-react';

const useSaveCall = (saveFn, onSuccess) => {
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState(null);

    const save = payload => {
        setSaving(true);
        saveFn(payload)
            .then(()=>{
                setSaving(false);
                setSaveError(null);
                onSuccess();
            })
            .catch(err=>{
                setSaving(false);
                setSaveError(err.message);
            });
    };

    return { saving, saveError, save };
};

const ModalForm = ({ modalOpen, toggleModal, user, saveUser }) => {

    //Initialize form fields with current user data
    const [fieldVals, setFieldVals] = useState(user || {
        firstName: '', lastName: '', phoneNumber: '',
        address: '', dateOfBirth: '', degreeType: 'hs',
        degreeField: '', degreeCompleted: false
    });

    //Use hook to manage save/saving state
    const { saving, saveError, save } = useSaveCall(saveUser, toggleModal);

    //Generic input change handler
    const onChangeHandler = (event, target) => {
        target = target || event.target;
        setFieldVals({ ...fieldVals, [target.name]: target.value });
    };

    //Checkbox change handler
    const checkboxOnChangeHandler = (event, target) => {
        setFieldVals({ ...fieldVals, [target.name]: target.checked });
    };

    return (
        <Modal open={modalOpen} onClose={toggleModal} closeOnEscape={false} 
            closeOnDimmerClick={false} >

            <Modal.Header>{user ? 'Update Profile' : 'Create Profile'}</Modal.Header>
            <Modal.Content scrolling>
                <Form id="modalForm" onSubmit={()=>save(fieldVals)}>

                    <Form.Group widths="equal">
                        <Form.Input fluid required label="First name" placeholder="First name" 
                            name="firstName" onChange={onChangeHandler} value={fieldVals.firstName}
                            pattern="[A-Za-z]+" />
                        <Form.Input fluid required label="Last name" placeholder="Last name"
                            name="lastName" onChange={onChangeHandler} value={fieldVals.lastName}
                            pattern="[A-Za-z]+" />
                    </Form.Group>

                    <Form.Group widths="equal">
                        <Form.Input fluid required label="Phone number" placeholder="10-digit Phone number"
                            name="phoneNumber" onChange={onChangeHandler} value={fieldVals.phoneNumber}
                            pattern="[0-9]+" minLength="10" maxLength="10" type="tel" />
                        <Form.Input fluid required label="Address" placeholder="Address" 
                            name="address" onChange={onChangeHandler} value={fieldVals.address}/>
                    </Form.Group>

                    <Form.Group inline style={{marginTop: '3em'}}>
                        <DateInput label="Date of birth" required popupPosition="right center"
                            name="dateOfBirth" onChange={onChangeHandler} value={fieldVals.dateOfBirth || ''}
                            placeholder="Date of birth" closable startMode="year"/>
                        <Form.Input type="number" label="Age" placeholder="Age" />
                        <Form.Input type="number" label="Height" placeholder="Height (in.)" />
                    </Form.Group>

                    <Form.Group inline style={{marginTop: '3em'}}>
                        <Form.Field label="Highest level of Education" control="select"
                            name="degreeType" onChange={onChangeHandler} value={fieldVals.degreeType}>
                            <option value="hs">High School</option>
                            <option value="bs">Bachelor's Degree</option>
                            <option value="ms">Master's Degree</option>
                            <option value="phd">Doctorate</option>
                        </Form.Field>
                        <Form.Input label="Specialization" placeholder="Specialization" 
                            name="degreeField" onChange={onChangeHandler} value={fieldVals.degreeField}/>
                        <Form.Field control={Checkbox} label={{ children: 'Diploma Received'}} 
                            name="degreeCompleted" onChange={checkboxOnChangeHandler} checked={fieldVals.degreeCompleted}/>
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
