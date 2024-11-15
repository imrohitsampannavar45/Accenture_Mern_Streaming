import React from "react";
class DataBinding extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
            value: 'Delhi'
        }
    }
    handleChange = (event) =>{
        this.setState({value: event.target.value});
    }
render () {
    return (<>
    <h1>Data Binding Demo</h1>
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <p>You Entered: {this.state.value}</p>    
    </>)
}
}
export default DataBinding;

