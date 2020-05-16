import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class PostItem extends Component {


    render() {

        const {loan,auth,showActions} = this.props

        
        return (
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <a href="profile.html">
                    <img
                      className="rounded-circle d-none d-md-block"
                      src={loan.avatar}
                      alt=""
                    />
                  </a>
                  <br />
                  <p className="text-center">{loan.name}</p>
                </div>
                <div className="col-md-10">
                  <p className="lead">Amount : {loan.text}</p>
                 
                </div>
              </div>
            </div>
          );
    }
}


PostItem.defaultProps = {
    showActions: true
  };


PostItem.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth:state.auth,

})

export default connect(mapStateToProp)(PostItem)