import React, { Component,Fragment } from 'react';

import './Comment.css';


class Comment extends Component{
    state={
        comment: [{
            name: "upgrad",
            value: "Best education content"
        }]
    };

    onClickHandler(e){
        e.preventDefault();
        let comments=this.state.comment;
        comments.push({
            name: e.target.name.value,
            value: e.target.comment.value
        });
        this.setState(
         {
             comment: comments
         }
        )
        
    }
    showComments(item,index){
        return(
            <Fragment key={index}>
            <div className="row">
                    <div className="col-sm-1">
                        <i className="fa fa-user user"></i>
                    </div>
                    <div className="col-sm-8 comment">
                        <div className="comment_name ">
                              {item.name}
                        </div>
                        <div className="comment_desc">
                              {item.value}
                        </div>  
                    </div> 
            </div><br/>
            </Fragment>
        )
    }
    
    render(){
        const comments=this.state.comment;
        return(
            <Fragment>
                <form onSubmit={(e)=>this.onClickHandler(e)}>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" name="name" style={{border:'none',borderBottom:'1px solid lightgray',width:'100%'}} placeholder="Your Name"/>
                    </div>
                    <div className="col-sm-6">
                        <span className="VideoDetail_comment"><input className="VideoDetail_commentBox" name="comment" placeholder="Your Comment" style={{border:'none',borderBottom:'1px solid lightgray',width:'100%',marginTop:'-26.5px'}}/>
                        <span></span></span>
                    </div><br/>
                </div> <br/>
                <div className="d-flex flex-row-reverse bd-highlight">
                    <div className="p-2 bd-highlight" ><button className="VideoDetail_cmnt_btn" type="reset" >Cancel</button></div>
                    <div className="p-2 bd-highlight"><button type="submit" className="VideoDetail_cmnt_btn"  >Comment</button></div>
                </div> 
                </form> <br/>
                    {comments.map(this.showComments)}    
            </Fragment>
        )
    }
}
 
export default Comment;