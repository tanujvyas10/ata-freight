import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostItem from './LoanItem'

class PostFeed extends Component {
    render() {

        const {loans} = this.props
        return loans.map(loan => <PostItem key = {loan._id} loan={loan}  />)
    }
}


PostFeed.propTypes = {
 posts:PropTypes.array.isRequired   
}

export default PostFeed