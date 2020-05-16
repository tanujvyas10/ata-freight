import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from '../../validation/isEmpty'
class ProfileAbout extends Component {
    render() {
        const { profile } = this.props;
    
        // Get first name
        const firstName = profile.user.name.trim().split(' ')[0];
         const status = profile.status
         const location = profile.location
    
        return (
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-light mb-3">
                <h3 className="text-center text-info">{firstName}'s status</h3>
                <p className="lead">
                 {status}
                </p>
                <hr />
                <h3 className="text-center text-info">location</h3>
                <div className="row">
                  <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}


ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
  };

export default  ProfileAbout