import React from 'react';

class First extends React.Component{

    render(){
        return(
            <div>
                <input id="name"></input>
                <button type="submit" onClick={this.props.name}>submit</button>
            </div>
        )
    }
}

export default First;