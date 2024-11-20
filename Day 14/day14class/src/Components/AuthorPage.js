import React from 'react';
import * as authorActions from '../Actions/AuthorActions'
import authorStore from '../Store/AuthorStore';


class AuthorPage extends React.Component
{
    constructor()
    {
        super();
        this.getAuthors = this.getAuthors.bind(this);
        this.state = {
            authors: authorStore.getAllAuthors()
        }
    }

    componentWillMount()
    {
        authorStore.on("change", this.getAuthors);

    }

getAuthors()
{
    this.setState({authors:authorStore.getAllAuthors()})
}
createAuthor()
{
    authorActions.createAuthor(this.refs.aname.value);
}

render()
{
const authors = this.state.authors;
var li = authors.map((author)=> <li>{author.authorName}</li>)

    return (
        <>
        
        <table border="6">
            <tr><td>Enter the Author Name :</td>
            <td><input type='text' ref="aname" /></td>
            </tr>

            <tr><td><button onClick={this.createAuthor.bind(this)}>Create Author</button></td></tr>
            <tr><td><h2>Author Details</h2>
            <ul>{li}</ul></td></tr>
        </table>
        
        </>
    )
}

}
export default AuthorPage;