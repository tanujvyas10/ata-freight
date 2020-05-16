import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { registeruser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'
class Register extends Component{
  constructor(){
      super();
      this.state={
          name:'',
          email:'',
          password:'',
          password2:'',
          errors:{}
      }

      this.onChange=this.onChange.bind(this)
      this.onSubmit= this.onSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps){// this runs when component receive new properties
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
      }
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
  }


  onChange(e){
       this.setState({ [e.target.name]:e.target.value })
  }

     onSubmit(e){
          e.preventDefault();
          const newUser = {
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          password2:this.state.password2
           }
          console.log("register",newUser)

          this.props.registeruser(newUser,this.props.history)
         
     }

 
    render(){

     const { errors } = this.state;
// equivalent of const errors = this.state.errors
   
  //const { user } = this.props.auth

        return (
            <div className="register">
           
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your ATA Freights account</p>
          <form noValidate onSubmit={this.onSubmit} >
          <TextFieldGroup 
          placeholder="Name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.onChange}
          error={errors.name }
          />
    
          <TextFieldGroup 
          placeholder="Email"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email }
        info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
          />

          <TextFieldGroup 
          placeholder="Password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password }

          />

          <TextFieldGroup 
          placeholder="Password"
          name="password2"
          type="password"
          value={this.state.password2}
          onChange={this.onChange}
          error={errors.password2 }

          />

          
           
           
           
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

Register.propType={
  registeruser : PropTypes.func.isRequired,//its a function that is required
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}


const mapStateToProps = (state)=>({
  auth:state.auth,
  errors:state.errors
})

export default connect(mapStateToProps,{registeruser})(withRouter(Register))



// <div className="form-group">
// <input type="email" 
// className={classnames('form-control form-control-lg',{
//     'is-invalid':errors.email
// })} 
// placeholder="Email Address" 
// onChange={this.onChange}
// value={this.state.email}
// name="email" />
// {
//  errors.email && (
//      <div className="invalid-feedback">{errors.email}</div>
//  )
// }
// <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>

// </div>


// <div className="form-group">
// <input type="password" 
// className={classnames('form-control form-control-lg',{
//   'is-invalid':errors.password
// })} 
// value={this.state.password}
// onChange={this.onChange}
//  placeholder="Password"
//   name="password" />
//   {
//       errors.password && (
//           <div className="invalid-feedback">{errors.password}</div>
//       )
//   }
// </div>

// <div className="form-group">
// <input type="password" 
// value={this.state.password2}
// onChange={this.onChange}
// className={classnames('form-control form-control-lg',{
//   'is-invalid':errors.password2
// })} 
//  placeholder="Confirm Password"
//   name="password2" />
//   {
//       errors.password2 && (
//           <div className="invalid-feedback">{errors.password2}</div>
//       )
//   }
// </div>