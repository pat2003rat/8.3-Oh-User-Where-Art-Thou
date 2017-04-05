var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

require('./utilities.js');
require('./router.js');

$(function(){
  Backbone.history.start();
});
