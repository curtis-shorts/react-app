// PascalCasing: Capitalize the first letter of the function names
function Message(){
    // JSX: JavaScript XML, gets converted to JS (ex. at babeljs.io/repl)
    const name='Curtis'
    if (name){
        return <h1>Hello {name}</h1>
    }
    return <h1>Hello World</h1>;
}

export default Message;