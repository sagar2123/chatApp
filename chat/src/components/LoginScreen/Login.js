import React from 'react';
import styles from './login.css'
class Login extends React.Component{
    sendMessage(value){
        if(value){
            let innerPara = document.createElement('p');
            innerPara.innerHTML = value;
            document.getElementById("messages").appendChild(innerPara);
            this.props.message("");
        }
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