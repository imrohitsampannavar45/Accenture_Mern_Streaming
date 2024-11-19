import React, {Component} from 'react';
let BaseComponent = (ModifiedComponent) => class extends Component
{
    constructor()
    {
        super();
        this.state={count:0}
    }

    incrementCount ()
    {
        this.setState({
            count:this.state.count+1
        })
    }


    render(){
        return (<>
        
        <h2>This is from Base Component</h2>
        <ModifiedComponent count = {this.state.count} increment = {()=> this.incrementCount()} />

        </>)
    }
}

const Button = (props) =>{
    console.log(props)
    return (
        <button onClick={props.increment}>Count: {props.count}</button>
    )
}
let NewButton = BaseComponent(Button);

class ContainerHoc extends Component
{
    render()
    {
        return(
            <>
            <h1>Higher Order Components</h1>
            <NewButton />

            </>
        )
    }
}

export default ContainerHoc;