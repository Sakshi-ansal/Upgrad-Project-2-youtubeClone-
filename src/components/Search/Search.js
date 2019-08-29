import React from 'react';
import "./Search.css";
import { Paper, Grid } from "@material-ui/core";
function Search(){
    return(
      <Paper style={{ padding: 7 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }} container justify="center" direction="row">
            <input
              placeholder="Search"
              className="Search_input"
              size="45"
            />&nbsp;
            <button
              className="btn btn-outline-secondary Search_button"
            >
              Search
            </button>
          </Grid>
        </Grid>
      </Paper>
      
    );
}
 export default Search;