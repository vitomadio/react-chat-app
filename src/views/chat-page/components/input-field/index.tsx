import React, { useContext } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { Formik, Field } from 'formik';
import { isRequired } from 'utils/validations';
import { ChatUserActions } from 'store/chat-user-state';
import { Store } from 'store';

import useStyles from './styles';

interface IValues {
    text: string;
}

const InputField: React.FC = (): React.ReactElement => {
    const { state } = useContext(Store);
    const classes = useStyles();

    const handleSendMessage = (values) => {
        ChatUserActions.sendMessage({
            senderId: state.currentUser.uid,
            receiverId: state.usersWithChats[0].uid,
            text: values.text,
            read: false,
        });
    };

    return (
        <>
            <Formik
                validateOnBlur
                initialValues={{ text: '' }}
                onSubmit={(values: IValues, { resetForm }) => {
                    handleSendMessage(values);
                    resetForm({});
                }}
            >
                {({ handleSubmit, handleChange, values, handleBlur, resetForm }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth className={classes.formControl}>
                            <Field
                                touched
                                validate={isRequired}
                                name="text"
                                render={() => (
                                    <TextField
                                        value={values.text || ''}
                                        name="text"
                                        id="outlined-basic"
                                        label="Write your message"
                                        variant="outlined"
                                        multiline
                                        rowsMax={2}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={classes.inputField}
                                        onKeyDown={(e: React.KeyboardEvent<any | Event>) => {
                                            if (e.key === 'Enter') {
                                                handleSendMessage(values);
                                            }
                                        }}
                                        onKeyUp={(e: React.KeyboardEvent<any | Event>) => {
                                            if (e.key === 'Enter') {
                                                resetForm({});
                                            }
                                        }}
                                    />
                                )}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                disabled={values.text === ''}
                            >
                                Send
                            </Button>
                        </FormControl>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default InputField;
