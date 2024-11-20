import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher/Dispatcher';

class AuthorStore extends EventEmitter
{
    constructor()
    {
        super()
        this.authors = [
            {authorName : "Sachin"},
            {authorName : "Sevak"},
            {authorName : "Arjun"}
        ]
    }
    createAuthor(authorName){
        this.authors.push({authorName});
            this.emit("change");
        
    }

    getAllAuthors()
    {
        return this.authors;
    }
    handleActions(action){
        switch(action.type)
        {
            case "CREATE_AUTHOR":{
                this.createAuthor(action.authorName);
                break;
            }
        }
    }
}

const authorstore = new AuthorStore();
Dispatcher.register(authorstore.handleActions.bind(authorstore));
export default authorstore