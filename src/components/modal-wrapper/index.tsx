import React, { ReactChildren, ReactChild, useEffect } from 'react';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';

interface IModalProps {
    openModal: boolean;
    children: ReactChildren | ReactChild;
    handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalWrapper: React.FC<IModalProps> = ({
    children,
    openModal,
    handleClose,
}: IModalProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.paper}>{children}</div>
        </Modal>
    );
};

export default ModalWrapper;
