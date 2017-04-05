var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user').User;
var UserCollection = require('../models/user').UserCollection;
var Chat = require('../models/message').Chat;
var ChatCollection = require('../models/message').ChatCollection;
var setupAjax = require('../utilities');
var apiUrl = 'https://tiny-parse-server.herokuapp.com';

class ChatLayout extends React.Component{
  constructor(props){
    super(props);
    this.handleChatChange = this.handleChatChange.bind(this);
    this.addChat = this.addChat.bind(this);

    var self = this;
    var chatCollection = new ChatCollection();
    chatCollection.fetch().done(function(){
      self.setState({chatCollection: chatCollection});
    });
    this.state = {
      chatCollection: chatCollection,
      message: ""
    };
  }

  handleChatChange(e){
    this.setState({message: e.target.value});
  }

  addChat(e){
    e.preventDefault();
    var user = (JSON.parse(localStorage.getItem('user')).username)
    this.state.chatCollection.create({message: this.state.message, user: user});
    this.setState({message: ''});
  }
  render(){
    var chats = this.state.chatCollection.map(function(chat){
      return(
        <li className="messagestoscreen"key={chat.cid}>{chat.get('message')}</li>
      )
    })

    return(
      <div className="container message-layout">
        <div className="row">
          <div className="col-md-12">
            <div className ="header text-center" >
            <h1>Let Us Chat!!!</h1>
            <br></br>
            
            </div>
            <form id="chat">
              <div className="form-group">
                <h2 className = "inspirationalmessage text-center"> It isn't about the words you say. <br></br> It is about the energetic message you send. </h2>
                <div className="spacingtext">
                  <input value={this.state.message} onChange={this.handleChatChange} className="form-control" type="text" name="Message" placeholder="Start typing...." />
                </div>
              <br></br>
                  <input onClick={this.addChat}className="btn btn-danger" type="submit" name="" value="Submit Message" />
              </div>
                </form>
            <form id="chat">
             <div className="form-group col-md-2 text-center">
              <img src="./images/arrow.png"></img>
             </div>
              <h2 className="text-center">Messages Here!!</h2>
             <div className ="text col-md-10">
              <ul className="form-group well messagingspacing">
              {chats}
              </ul>
             </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

module.exports = {
  ChatLayout
};
