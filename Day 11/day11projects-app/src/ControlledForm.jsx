import React from "react";

class ControlledForm extends React.Component
{
    constructor()
    {
        super();
        this.state = {value:"inital value"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event)
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(event)
    {
            alert("ur input submitted successfully :"+ this.state.value);
            event.preventDefault();
    }
render()
{
    return (
        <form onSubmit={this.handleSubmit}>

<h1>Controlled Form Demo</h1>
<label>Name: 
    <input type="text" value={this.state.value} onChange={this.handleChange} />
</label>

<input type="text" value="hello"  />
<input type="submit" value="Submit" />
</form>


    
    )
}

}

export default ControlledForm;