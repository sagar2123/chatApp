import React from 'react';
import styles from './login.css';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:5000');
class Login extends React.Component{
    sendMessage(value){
        if(value){
            let innerPara = document.createElement('p');
            innerPara.innerHTML = value;
            socket.emit('chat message', value);
            document.getElementById("messages").appendChild(innerPara);
            this.props.message("");
        }
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
    }
     
    render(){
        return(
            <div>
                <ul id="messages"></ul>
                <div className={'inputContainer'}>
                    <input id="m" className={'inputForMessage'} value={this.props.value} onChange={e => this.props.message(e.target.value)}/>
                    <button className={'sendButton'} onClick={() => {this.sendMessage(this.props.value)}}>Send</button>
                </div>
            </div>
        )
    }
}

export default Login;