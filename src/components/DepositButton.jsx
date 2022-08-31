import React from "react";
import { Grid, Button } from "@mui/material";

const DepositButton = (props) => {
  return (
    <Grid item xs={6} sm={3} md={3} lg={3} >
      <Button variant="outlined" value={props.value} onClick={props.onClick} sx={{width: "100%"}}>
        {props.title}
      </Button>
    </Grid>
  );
};

export default DepositButton;
