import React from 'react';
import styles from './login.css';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://172.16.17.170:5000');
class Login extends React.Component{

    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendTyping = this.sendTyping.bind(this);
        this.stopTyping = this.stopTyping.bind(this);
    }
    
    sendMessage(value){
        if(value){
            socket.emit('chat message', this.props.nameValue+": "+value);
            this.props.message("");
            this.stopTyping();
            this.sendTyping();
        }
    }

    sendTyping(){
        socket.emit('Typing', "User is Typing");
    }

    stopTyping(){
        socket.emit('stopTyping');
    }

    componentDidMount() {
        // var socket = io();
            socket.emit('newUserAdded', "New user has been added");
            // socket.on('chat message', function(msg){
            //     $('#messages').append($('<li>').text(msg));
            // });
            // socket.on('newUserAdded', function(msg){
            //     $('#messages').append($('<li>').text(msg));
            // });
            socket.on('newUserAdded', function(msg){
                let innerPara = document.createElement('p');
                innerPara.innerHTML = "New user added";
                document.getElementById("messages").appendChild(innerPara);
            });

            socket.on('chat message', function(msg){
                let innerPara = document.createElement('p');
                innerPara.innerHTML = msg;
                document.getElementById("messages").appendChild(innerPara);
            });

            socket.on('Typing', function(msg){
                let innerPara = document.createElement('p');
                innerPara.id = "typingMessage"
                innerPara.innerHTML = msg;
                document.getElementById("messages").appendChild(innerPara);
            });

            socket.on('stopTyping', function(){
                document.getElementById("messages").removeChild(document.getElementById("typingMessage"));
            });
    }
     
    render(){
        return(
            <div className={'chatContainer'}>
                <div className={'chatMessageCotainer'}>
                    <ul id="messages" className={'messageContainerUl'} ></ul>
                </div>
                <div className={'inputContainer'}>
                        <input id="m" className={'inputForMessage'} value={this.props.value} onBlur={e => this.stopTyping
                        ()} onFocus={this.sendTyping} onKeyDown={(e) => {(e.keyCode == 13)?this.sendMessage(this.props.value): ''}} onChange={e => this.props.message(e.target.value)}/>
                        <button className={'sendButton'} onClick={() => this.sendMessage(this.props.value)}>Send</button>
                </div>
            </div>
        )
    }
}

export default Login;