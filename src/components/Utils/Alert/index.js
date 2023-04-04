import React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

/**
* @author
* @function Alert
**/

export const CustomAlert = (props) => {
  const { success, msg, handleClearMsg, errorAlert } = props;
  return (
    <Alert variant='outlined' severity={ success ? 'success' : errorAlert && 'error'} action={
      <IconButton
        aria-label='close'
        color='inherit'
        size='small'
        onClick={() => handleClearMsg()}
      >
        <CloseIcon fontSize='inherit' />
      </IconButton>
    } className='alert'>{success ? msg : errorAlert ? msg : 'Not supported'}</Alert>
  )

}