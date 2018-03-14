import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/LoginScreen/Login.js';
import First from './components/FirstComponent/First.js';

class Name extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComponent: false,
        value: ""};
        this.onLogin = this.onLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    createBlogPost(data) {
        return fetch('http://localhost:5000/name', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    onLogin(){
      this.setState({showComponent: !this.state.showComponent});
      console.log(this.createBlogPost({"Sagar":"bhatia"}));
    }


    handleInputChange(newPartialInput) {
        this.setState({value: newPartialInput})
    }

    render(){
        return(
            <div>
            {this.state.showComponent ?
            <Login message={this.handleInputChange} value={this.state.value} /> :
            <First name={this.onLogin}/>
            }
            </div>
        )
    }
}
ReactDOM.render(
  <Name />,
  document.getElementById('root')
);