import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35.5ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
     
      <div>
        
        <TextField
          id="Firstname"
          label="Firstname"
          placeholder="Firstname"
          multiline
          variant="outlined"
        />
        <TextField
          id="lastname"
          label="Lastname"
          placeholder="Lastname"
          multiline
          variant="outlined"
        />
       </div> 
      <div>
        <TextField
          id="Email"
          label="Email"
          placeholder="Email"
          multiline
          variant="outlined"
        type="Email"
        />
        <TextField
          id="Contact"
          label="Contact"
          placeholder="Contact"
          multiline
          variant="outlined"
       type="tel"
        />
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
           placeholder="Enter Message"
          variant="outlined"
      style={{width:"97%"}}
        />
      </div>
      <Button variant="contained" color="primary">
  Primary
</Button>
    </form>
  );
}


