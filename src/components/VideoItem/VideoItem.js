import React from 'react';
// import {Grid,Paper,Typography} from '@material-ui/core';
const VideoItem = ({video,onVideoSelect}) =>{
    return(
      //   <Grid item xs={12}>
      //   <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
      //     <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      //     <Typography variant="subtitle1">
      //       <b>{video.snippet.title}</b>
      //     </Typography>
      //   </Paper>

    <div className="card border-light mb-3" style={{maxWidth: "600px"}}>
    <div className="row no-gutters" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
      <div className="col-md-4">
        <img src={video.snippet.thumbnails.medium.url} className="card-img-top embed-responsive-item" alt="thumbnail"/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h6 style={{weight:'bold',marginTop:'-17px',fontSize:'15px'}} className="card-title">{video.snippet.title}</h6>
          <p style={{marginTop:'-13px',fontSize:'15px'}} className="card-text">{video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  </div>
    )
}
export default VideoItem;