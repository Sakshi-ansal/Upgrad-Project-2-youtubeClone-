import React,{Component} from 'react';
import "./Search.css";
import { Paper, Grid } from "@material-ui/core";
class Search extends Component{
  state={
    searchVal:''
  }
  onChangeHandler = (event) =>{
    this.setState({searchVal:event.target.value})
  }
  onSubmitHandler = (event) =>{
    const {searchVal} = this.state;
    const {onFormSubmit} = this.props;
    onFormSubmit(searchVal);
    event.preventDefault();
  }
  render(){
    return(
      <Paper style={{ padding: 7 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }} container justify="center" direction="row">
            <form onClick={this.onSubmitHandler}>
            <input
              placeholder="Search"
              className="Search_input"
              size="45"
              onChange={this.onChangeHandler}
            />&nbsp;
            <button
              className="Search_button"
              // onClick={this.onClickHandler}
            >
              Search
            </button>
            </form>
          </Grid>
        </Grid>
      </Paper>
      
    );
  }
}
 export default Search;