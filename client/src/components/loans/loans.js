import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostForm from './LoanForms'
import PostFeed from './LoanFeed'
import Spinner from '../common/Spinner'
import {getPosts} from '../../actions/loanActions'
class Posts extends Component {


    componentDidMount(){
        this.props.getPosts();
    }


    render() {

        const {loans,loading} = this.props.post
        let postContent;

        if(loans === null || loading){
            postContent = <Spinner/>
        }
        else{
            postContent = <PostFeed loans= {loans}/>
        }
        return (
            <div className = "feed">
              <div className= " container">
                    <div className="row">
                    <div className = "col-md-12">
                    <PostForm />
                    {postContent}
                    </div>
                    </div>

              </div>
                
            </div>
        )
    }
}


Posts.propTypes = {
    getPosts:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}


const mapStateToProps = state =>({
    post:state.post
})

export default connect(mapStateToProps,{getPosts})(Posts)