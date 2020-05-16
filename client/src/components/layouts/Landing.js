import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import {connect } from 'react-redux'

class Landing extends Component {

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
  }

    render() {
        return (
         
          <div class="landing">
          <div class="dark-overlay landing-inner text-light">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h1 class="display-3 mb-4">ATA Freight's Loan
                  </h1>
                  <p class="lead">Get your loan the easiest way possible!! :</p>
                  <hr />
                  <a href="/register" class="btn btn-lg btn-info mr-2">Sign Up</a>
                  <a href="/login" class="btn btn-lg btn-light">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

Landing.propTypes= {
  auth:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  auth:state.auth
})

export default connect(mapStateToProps)(Landing);