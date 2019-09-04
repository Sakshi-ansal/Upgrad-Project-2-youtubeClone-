import React,{Component, Fragment} from 'react';
import './App.css';
import Search from "./components/Search/Search";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
// import {Grid} from "@material-ui/core";
import youtube from "./api/youtube";
// import { height } from '@material-ui/system';

class App extends Component {
  state={
    videos :[],
    selectedVideo:null,
    // mystatus:'true'
  }
  onSubmitHandler = async (searchVal) => {
    const response = await youtube.get('search' , {
      params:{
        part:'snippet',
        maxResults:15,
        order:'viewCount',
        q:searchVal,
        type:'video',
        videoDefinition:'high',
        key:'AIzaSyCnOscjhD8Qc3UfRSMI2aC63YMixLN_Yfg',
        
    }
    });
    console.log(response.status)
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
  }
  onVideoSelect = (video) =>{
    this.setState({selectedVideo:video})
  }
  componentDidMount(){
    this.onSubmitHandler("upGrad");
  }
 
  render(){
    const {selectedVideo,videos,mystatus} = this.state;
    
  return (
    // <Grid justify="center" container spacing={10}>
    //     <Grid item xs={11}>
    //        <Grid container spacing={10}>
    //          <Grid className="container-fluid" item xs={12}>
    //              <Search onFormSubmit = {this.onSubmitHandler}/>
    //          </Grid>
    //          <Grid item xs={8}>
    //              <VideoDetail 
    //              video = {selectedVideo} 
    //              />
    //          </Grid>
    //          <Grid item xs={4}>
                //  <VideoList 
                //  videos = {videos}
                //  onVideoSelect = {this.onVideoSelect}
                //  />
    //          </Grid>
    //        </Grid>
    //     </Grid>
    // </Grid> 
  <Fragment>
    <div>
       <Search onFormSubmit = {this.onSubmitHandler} video = {selectedVideo} />
    </div><br/><br/><br/>
    <div className="container-fluid">
        <div className="row">
             <div className="col-sm-8">
             <VideoDetail video = {selectedVideo} mystatus = {mystatus} />
             </div>&nbsp;&nbsp;&nbsp;&nbsp;
             <div className="col-sm-3">
               <VideoList 
                 videos = {videos}
                 mystatus={mystatus}
                 onVideoSelect = {this.onVideoSelect}
                 />
             </div>
        </div>
    </div>
  </Fragment>

    );
  
  }
}

export default App;
