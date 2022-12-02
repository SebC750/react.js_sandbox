import React, {Component} from 'react';
import './view.css';


class Counter extends Component{
   
    state = {
        count: 0
    }
    render(){
        return (
        <div> 
            <link rel="stylesheet" href="view.css"></link>
            <div class = "jumbotron">
                <h1 id = "title"> Welcome to the program! </h1>
            </div>
            
            <span> {this.state.count}</span>
            <button onClick={this.showMSG} id = "button"> Click me! </button>
            <p id = "text"></p>
        </div>
        );
    }
    showMSG(){
        return React.createElement(document.getElementById("text").innerHTML = "I was clicked!");
    }
    
}

export class List extends Component{
    render(){
        return (
            <div>
                <h2> Random List</h2>
                <ol>
                    <li> Get groceries </li>
                    <li> Play video games </li>
                    <li> Work on coding project </li> 
                </ol>
            </div>
        );
    }
}
export default Counter;
