import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, Divider, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { fetchRecipes } from '../api/ApiCall';
import { selectableIngredients } from '../utils/helpful';
import { Recipes } from '../models/Recipes';

const MaterialUiDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ingredientList = selectableIngredients;

// Alter for more columns
const columns = 6; 

export interface IngredientsDialogProps {
  onUpdateRecipes(recipes: Recipes[]): void;
}

export default function CustomizedDialogs(props: IngredientsDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedIngredients, setSelectedIngredients] = React.useState<string[]>([]);
  const [ingredientToSearch, setIngredientToSearch] = React.useState<string>("");
  
  const handleCheckboxChange = (label: string) => {
    if (selectedIngredients.includes(label)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== label));
    } else {
      setSelectedIngredients([...selectedIngredients, label]);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    props.onUpdateRecipes(await fetchRecipes(selectedIngredients));
    setOpen(false);
  };

  const handleSaveChanges = () => {
    handleClose();
  };

  const handleSearch = (e: string) => {
    setIngredientToSearch(e);
  }

  return (
    <React.Fragment>
      <Button variant="contained" 
      onClick={handleClickOpen}>
        Ingredients
      </Button>
      
      <MaterialUiDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={'xl'}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%"
          }
        }}
      >
        <DialogTitle sx={{ m: 2, p: 2 }} id="customized-dialog-title">
          Add/Remove Ingredients
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
        <Divider />

          <div style={{padding: "1%"}}>
          <TextField id="outlined-basic" label="Search Ingredient" variant="outlined"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            fullWidth
          />
          </div>
        <DialogContent dividers>
          <FormGroup>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,     // Establishes columns
                gap: '0px',                                         // Gap between columns
              }}
            >
        
        {ingredientList.map((ingredient) => (
          ingredient.name.includes(ingredientToSearch) && (
                <FormControlLabel
                  key={ingredient.id}
                  control={
                    <Checkbox
                      checked={selectedIngredients.includes(ingredient.name)}
                      onChange={() => handleCheckboxChange(ingredient.name)}
                    />
                  }
                  label={ingredient.name}
                />
          )
              ))}            
              </div>

          </FormGroup>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogActions>
      </MaterialUiDialog>
    </React.Fragment>
  );
}
