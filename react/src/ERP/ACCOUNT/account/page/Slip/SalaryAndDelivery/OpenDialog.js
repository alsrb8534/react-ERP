import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import Select from "react-select";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  DialogActions,
  Button,
  FormControl,
  makeStyles,
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MonthSalary from "./MonthSalary";
import Delivery from "./Delivery";

const OpenDialog = ({ open, close, value }) => {
  const [division, setDivision] = React.useState(2);
  const Close = () => {
    close({
      division: "SalaryDialog",
    });
};
const handleChange = (event, newValue) => {
  setDivision(newValue);
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
const classes = useStyles();

return(
    <Dialog
    aria-labelledby="simple-dialog-title"
    open={open}
    fullWidth={true}
    fullScreen={true}
   
    >
      <DialogTitle id="simple-dialog-title" Align="center">
        임금/납품
        <DialogActions>
        <Button onClick={Close} color="primary">
          X
        </Button>
      </DialogActions>     
      </DialogTitle>
       
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={division} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="임금" />
            <Tab label="납품"  />
          </Tabs>
        </AppBar>
        {division===0&&
            <MonthSalary  close={close}></MonthSalary>
        }
        {
           division===1&&
         <Delivery close={close}/>        
        }
        </div>     
    </Dialog>
)


}


export default OpenDialog;
