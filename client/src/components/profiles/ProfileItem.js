import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/isEmpty';


class ProfileItem extends Component {
    render() {

        const {profile} = this.props;
             
        return (
            <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <img src={profile.user.avatar} alt="" className="rounded-circle" />
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>{profile.user.name}</h3>
                <p>
                  {profile.status}{' '}    
                </p>
             
                <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                  View Profile
                </Link>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <h4>location</h4>
                <ul className="list-group">
                 {profile.location}
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

ProfileItem.propTypes = {
    profile:PropTypes.object
}


export default ProfileItem;