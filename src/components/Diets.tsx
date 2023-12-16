import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const dietList = [
    'Gluten Free',
    'Ketogenic',
    'Vegetarian',
    'Lacto-Vegetarian',
    'Ovo-Vegetarian',
    'Vegan',
    'Pescetarian',
    'Paleo',
    'Primal',
    'Low FODMAP',
    'Whole30'
  ];
  

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [selectedDiets, setSelectedDiets] = React.useState<string[]>([]);

  const handleCheckboxChange = (label: string) => {
    if (selectedDiets.includes(label)) {
      setSelectedDiets(selectedDiets.filter((item) => item !== label));
    } else {
      setSelectedDiets([...selectedDiets, label]);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveChanges = () => {
    // Array of selected Diets to be used with Search
    console.log(selectedDiets);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="contained" 
      onClick={handleClickOpen}>
        Dietary Restrictions
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 2, p: 2 }} id="customized-dialog-title">
          Dietary Restrictions
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <FormGroup>
            {dietList.map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={selectedDiets.includes(label)}
                    onChange={() => handleCheckboxChange(label)}
                  />
                }
                label={label}
              />
            ))}
          </FormGroup>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
