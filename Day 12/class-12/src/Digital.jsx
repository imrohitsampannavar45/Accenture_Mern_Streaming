import React,{Component} from "react";
import {Link} from 'react-router-dom';
 
class Digital extends Component
{
    render(){
        return(<>
 <div style={{'textAlign':'center','width':'100%','color':'blue','height':'80%'}}>
    <h2>Digital Learning Path</h2>
    <ul style={{'listStyle':'none','textAlign':'center'}}>
        <li><Link to="/About/Digital/UI Path">UI Path</Link></li><br/>
        <li><Link to="/About/Digital/BigData">BigData</Link></li><br/>
    </ul>
 
</div>
       
        </>)
    }
}
 
 
export default Digital;