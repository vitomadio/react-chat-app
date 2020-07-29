import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';

interface IMessage {
    status: 'error' | 'info' | 'success' | 'warning' | undefined;
    text: string;
}

const AlertMessage: React.FC<IMessage> = ({ status, text }: IMessage) => {
    const [alertMessage, setAlertMessage] = useState<IMessage | undefined>();

    return (
        <>
            <Alert severity={status}>{text}</Alert>
        </>
    );
};

export default AlertMessage;
