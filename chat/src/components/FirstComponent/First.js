import React from 'react';
import styles from './first.css';
class First extends React.Component{

    render(){
        return(
            <div className={'loginContainer'}>
                <h1 className={'heading'}>Welcome to the chat room! Enter the name to start the chat</h1>
                <form action="">
                    <input id="name" className={'nameInput'} value={this.props.nameValue} onChange={e => this.props.messageValue(e.target.value)} autocomplete="off"></input>
                    <br/>
                    <br/>
                    <button type="submit" className={'submitButton'} onClick={this.props.name}>submit</button>
                </form>
            </div>
        )
    }
}

export default First;