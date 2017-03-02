var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user').User;
var apiUrl = 'https://tiny-parse-server.herokuapp.com';

class LoginContainer extends React.Component{
  handleSignUpSubmit(e){
    e.preventDefault();
    console.log('check this out');
  var user = {
    username: $('#signup-email').val(),
    password: $('#signup-password').val(),
  }

  console.log(user);
}



  render(){

    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Parse Users</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Login</h1>
            <LoginForm />
            <SignUpForm />
          </div>



          </div>
        </div>
      </div>
    )

  }
}

class LoginForm extends React.Component{
  render(){
    return(
    <form id="login">
      <div className="form-group">
        <label htmlFor="email-login">Email address</label>
        <input className="form-control" name="email" id="email-login" type="email" placeholder="Email" />
      </div>

      <div className="form-group">
        <label htmlFor="password-login">Password</label>
        <input className="form-control" name="password" id="password-login" type="password" placeholder="Password" />
      </div>

      <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
    </form>
  )
  }
}
  var SignUpForm = React.createClass({
    getInitialState: function(){
      return{
        username: '',
        password: ''
      }
    },

    handleSignUpSubmit: function(e){
      e.preventDefault();
      console.log(this.state);
      var newUser = new User(this.state);
      newUser.save();
    },


    handleEmailChange: function(e){
      e.preventDefault();
      this.setState({username: e.target.value})
    },

    handlePasswordChange: function(e){
      e.preventDefault();
      this.setState({password: e.target.value})
    },


    render(){
      return (
        <div className="col-md-6">
          <h1>No Account? Sign Up!</h1>
        <form onSubmit={this.handleSignUpSubmit} id="signup">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange= {this.handleEmailChange} id="signup-email" className="form-control" type="text" name="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input onChange= {this.handlePasswordChange} id="signup-password" className="form-control" type="password" name="password" placeholder="Password" />
          </div>

          <input className="btn btn-primary" type="submit" value="Sign Up!" />
        </form>
      </div>
      )
    }

});


module.exports = {
  LoginContainer
}
