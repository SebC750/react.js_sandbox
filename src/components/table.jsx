import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './view.css';


class Table extends Component{
    
    state = {
        allData: []
    }
    
   componentDidMount() {
        fetch("https://recommend.gosemantically.com/searchExpert/1")
        .then((response) => response.json())
        .then((data)=> this.setState({allData: data.message[0]}))
    }


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
