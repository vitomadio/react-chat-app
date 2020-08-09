import * as React from 'react';
import { Button } from '@material-ui/core';

interface IButtonListProps {
    handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonList: React.FunctionComponent<IButtonListProps> = ({
    handleDelete,
}: IButtonListProps) => (
    <Button variant="contained" color="secondary" fullWidth onClick={handleDelete}>
        Delete message
    </Button>
);

export default ButtonList;
