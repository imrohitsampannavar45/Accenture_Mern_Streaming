import Dispatcher from '../Dispatcher/Dispatcher'


export function createAuthor(authorName)
{
    Dispatcher.dispatch({
        type: "CREATE_AUTHOR",
        authorName
    });
}