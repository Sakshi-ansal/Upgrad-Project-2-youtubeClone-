import React,{Fragment,Component} from 'react';
import {Paper,Typography} from '@material-ui/core';
import './VideoDetail.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import Comment from '../Comment/Comment';

var someVariable="true";
class VideoDetail extends Component{
    state={
        someVariable:"true"
    }
    onColorChange=()=>{
        this.setState({
            someVariable:"false"
        })
     }
    render(){
        const video=this.props.video;
        if(!video)return <div className="VideoDetail_notFound">No Videos Found</div>;
        const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}` ;
    return(
        <Fragment>
            <Paper className="VideoDetail_paper1" style={{height:'27%',width:'96%',border:'none'}}>
                <iframe  height='100%' width='100%' title='Video Player' src={videoSrc}>

                </iframe>
            </Paper>
            <div  style={{padding:'15px',width:'96%',border:'none'}}>
                <div className="row">
                <Typography className="col-sm-10" variant="h6" style={{fontSize:'16px'}}>
                    {video.snippet.title} | {video.snippet.channelTitle} 
                </Typography>
                <div className="col-sm-1"></div>
                <Typography className="col-sm-1">
                    {/* <i className="fa fa-heart heart" onClick={onColorChange()}></i> */}
                    <i className={someVariable===this.state.someVariable ? "fa fa-heart heart" : "fa fa-heart heart1"} onClick={this.onColorChange}></i>
                </Typography>
                </div>
                <Typography variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography><br/><br/>
                <h5 style={{color:'rgb(109, 105, 105)'}}>Comments</h5><br/>
                <Comment/>
            </div>
        </Fragment>
    )
    }
}

export default VideoDetail;