import React,{Component, Fragment} from 'react';
import './App.css';
import Search from "./components/Search/Search";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import youtube from "./api/youtube";


class App extends Component {
  state={
    videos :[],
    selectedVideo:null,
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
    const {selectedVideo,videos} = this.state;
    
  return (

  <Fragment>
    <div>
       <Search onFormSubmit = {this.onSubmitHandler} video = {selectedVideo} />
    </div><br/><br/><br/>
    <div className="container-fluid">
        <div className="row">
             <div className="col-sm-8">
             <VideoDetail video = {selectedVideo}  />
             </div>&nbsp;&nbsp;&nbsp;&nbsp;
             <div className="col-sm-3">
               <VideoList 
                 videos = {videos}
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
