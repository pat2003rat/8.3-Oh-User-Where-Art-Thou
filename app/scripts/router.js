var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var LoginLayout = require('./components/login.jsx').LoginLayout;
var ChatLayout = require('./components/messages.jsx').ChatLayout;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat/': 'chat'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginLayout),
      document.getElementById('app')
    );
  },
  chat: function(){
    ReactDOM.render(
      React.createElement(ChatLayout),
      document.getElementById('app')
    );
  },
});
var appRouter = new AppRouter();

module.exports = appRouter;
