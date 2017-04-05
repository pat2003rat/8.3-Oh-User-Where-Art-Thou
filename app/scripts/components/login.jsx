var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user').User;
var UserCollection = require('../models/user').UserCollection;
var setupAjax = require('../utilities');
var apiUrl = 'https://tiny-parse-server.herokuapp.com';


class LoginLayout extends React.Component{
  handleSignUp(e){
    e.preventDefault();
    var user = {
      username: $('#signup-email').val(),
      password: $('#signup-password').val(),
    }

    console.log(user);
    $.post(apiUrl + '/users', user).then(function(data){
      console.log(data);
      setupAjax(data);
    });

  }
  handleLogin(e){
    e.preventDefault();
    var username = $('#email-login').val(),
        password = $('#password-login').val();


    var url = apiUrl + '/login?username=' +
            encodeURIComponent(username) + '&' +
            'password=' + encodeURIComponent(password);
    $.get(url).then(function(data){
      var userData = JSON.stringify(data);
      localStorage.setItem('user', userData);
      setupAjax(data);
      Backbone.history.navigate('chat/', {trigger: true});
    });

  };
  render(){
    return(
      <div className="container">
          <div className="row">
            <div className ="col-md-12 text-center loginjumbotron" >
            <h1>Authorize Yourself</h1>
            </div>
              <div className="col-md-4 text-center usertitle">
                <h1>User Login</h1>
                <form onSubmit={this.handleLogin.bind(this)} id="login">
                <div className="form-group">
                  <label htmlFor="email-login">E-Mail Address</label>
                  <input className="form-control" name="email" id="email-login" type="email" placeholder="Enter E-Mail Address Here" />
                </div>
                <div className="form-group">
                  <label htmlFor="email-password">Password</label>
                  <input id="password-login" className="form-control" type="password" name="email" placeholder="Enter Password Here" />
                  </div>
                  <input className="btn btn-primary" type="submit" name="" value="Log In" />
                </form>
              </div>
            <div className ="col-md-4 spacing">
              <img src="./images/messaging.png"></img>
            </div>
            <div className="col-md-4 text-center signuptitle">
              <h1>Sign Up!!!</h1>
              <form onSubmit={this.handleSignUp.bind(this)} id="signup">
              <div className="form-group">
                <label htmlFor=""> E-Mail Address </label>
                <input id="signup-email" className="form-control" type="text" name="email" placeholder="Enter E-Mail Address Here" />
              </div>
              <div className="form-group">
              <label htmlFor=""> Password </label>
              <input id="signup-password" className="form-control" type="password" name="password" placeholder="Enter Password Here" />
              </div>
              <input className="btn btn-primary" type="submit" name="" value="Sign Up" />
              </form>
              </div>
          </div>
      </div>
    )
  }
};
module.exports = {
  LoginLayout
};
