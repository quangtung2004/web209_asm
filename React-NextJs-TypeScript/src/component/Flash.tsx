import { Alert, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';

type FlashProps = {
  isShow: boolean;
};

const Flash = ({ isShow }: FlashProps) => {
  const [open, setOpen] = useState(isShow);

  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={1000}
    >
      <Alert onClose={handleClose} severity="success">
        Thành công
      </Alert>
    </Snackbar>
  );
};

export default Flash;
