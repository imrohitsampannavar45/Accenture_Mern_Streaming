import React,{Component} from 'react';
import {Link} from 'react-router-dom'
 
class NavigationSection extends Component
{
    render(){
        return(<>
         <div style={{'textAlign':'center','width':'100%','color':'blue',
         'height':'80%'
        ,'backgroundColor':'pink'}}>
            <Link to="/About/NewIT">NewIT</Link>
            <Link to="/About/Digital">Digital</Link>
         </div>
        </>)
    }
}
export default NavigationSection;