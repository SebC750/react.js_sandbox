import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './view.css';


class Table extends Component{
   //Sets up an empty array that will hold the json values, which can then be traversed through and displayed into the table. 
    state = {
        allData: []
    }
   //Built-in react function that executes code within it. 
   componentDidMount() {
        fetch("https://recommend.gosemantically.com/searchExpert/1")
        //Grab the api data
        .then((response) => response.json())
        //Then, add it to the array by updating the state.
        .then((data)=> this.setState({allData: data.message[0]}))
    }

    //HTML 
    render(){
        
        return (
        
        <div> 
           
            <body id = "background">
            <h1 id = "title"> Suggested professionals </h1>
            <table id = "tableFormat">
            <tbody>
             <tr id = "headerRow">
                <th> User_ID </th>
                <th> Name </th>
                <th> Weighted Score </th>
                <th> Similarity Score </th>
             </tr>
               
                   
                   {this.state.allData.map((val)=> (
                    
                     <tr key={val.id}>
                        <td > {val.user_id} </td>
                        <td > {val.user_name} </td>
                        <td > {val.Weighted_Score} </td>
                        <td > {val.similarity_score} </td>
                     </tr>
                    
                   ))
                 
                   }
                
                
             </tbody>
            </table>
            </body>
        </div>
        );
        
    }
   

    
}


export default Table;
