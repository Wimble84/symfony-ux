import * as React from 'react';
import Button from '@mui/material/Button';

const DefaultButton = ({ label }: props) => (
    <Button variant="contained">{ label }</Button>
);

interface props {
    label: string
}

export default DefaultButton;
