import React,{Component} from 'react';
import './App.css';
import Search from "./components/Search/Search";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import {Grid} from "@material-ui/core";
import youtube from "./api/youtube";

class App extends Component {
  state={
    videos :[],
    selectedVideo:null
  }
  onSubmitHandler = async (searchVal) => {
    const response = await youtube.get('search' , {
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCnOscjhD8Qc3UfRSMI2aC63YMixLN_Yfg',
        q:searchVal
    }
    });
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
  }
  render(){
    // const {selectedVideo} = this.state;
  return (
    <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
           <Grid container spacing={10}>
             <Grid item xs={12}>
                 <Search onFormSubmit = {this.onSubmitHandler}/>
             </Grid>
             <Grid item xs={8}>
                 <VideoDetail 
                //  video = {selectedVideo} 
                 />
             </Grid>
             <Grid item xs={4}>
                 <VideoList />
             </Grid>
           </Grid>
        </Grid>
    </Grid> 
  );
  }
}

export default App;
