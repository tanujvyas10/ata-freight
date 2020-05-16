import React,{Component} from 'react'
import Proptypes from 'prop-types'
import {connect } from 'react-redux';
import {loginUser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errors:{}
        }
  
        this.onChange=this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    componentDidMount(){
      if(this.props.auth.isAuthenticated){
        this.props.history.push("/dashboard")
      }
    }

    componentWillReceiveProps(nextProps){
       if(nextProps.auth.isAuthenticated){
           this.props.history.push('/dashboard')
       }

      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
      }
    }

    onChange(e){
        this.setState({ [e.target.name]:e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        const userData={
            email:this.state.email,
            password:this.state.password
        }

        console.log("onsubmit login",userData)
     this.props.loginUser(userData)
      
    }

    render(){

      const {errors}= this.state;

        return (

            <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Log In</h1>
                  <p className="lead text-center">Sign in to your ATA Freights Loan's account</p>
                  <form onSubmit={this.onSubmit}>
                  <TextFieldGroup 
                  placeholder="Email address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email }

                  />
                  <TextFieldGroup 
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password }

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

Login.propTypes={
  loginUser:Proptypes.func.isRequired,
  auth:Proptypes.object.isRequired,
  errors:Proptypes.object.isRequired
}

const mapStateToProps =(state)=>({
  auth:state.auth,
  errors:state.errors

})
export default connect(mapStateToProps,{loginUser})(Login);


// <div className="form-group">
// <input type="password" 
// className={classnames('form-control form-control-lg',{
//   'is-invalid':errors.password
// })}
// value={this.state.password}
// onChange={this.onChange}
// placeholder="Password" name="password" />
// {errors.password && (
//   <div className = "invalid-feedback">{errors.password}</div>
// )
// }
// </div>