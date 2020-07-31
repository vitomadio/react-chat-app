import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import IMessage from 'interfaces/message-interface';

const AlertMessage: React.FC<IMessage> = ({ status, text }: IMessage) => {
    return (
        <>
            <Alert severity={status}>
                <p>{text}</p>
            </Alert>
        </>
    );
};

export default AlertMessage;
