import React from 'react';

const VideoItem = ({video,onVideoSelect}) =>{
    return(
    <div className="card border-light mb-3" style={{maxWidth: "600px"}}>
    <div className="row no-gutters " style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
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