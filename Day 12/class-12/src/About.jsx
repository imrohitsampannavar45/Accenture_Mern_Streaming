import React,{Component} from 'react';
import NavigationSection from './NavigationSection';
class About extends Component
{
    render()
    {
    return(
         <div style={{'textAlign':'center',
         'width':'100%','color':'blue',
         'height':'80%'
    ,'backgroundColor':'pink'}}>
    <h1>About Page</h1>
    <div>
    <NavigationSection/>
    </div>
    </div>)
    }
}
 
export default About;