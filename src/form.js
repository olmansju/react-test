
function MyForm( {fName, setFName} ) { 
    function handleSubmit(event) {
        event.preventDefault();
        setFName(event.target.elements.name.value);
    }
    return (
        <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
        type="text" 
        value={fName}
        onChange={(e) => setFName(e.target.value)}/>
      </label>
    </form>
    )
}

export { MyForm };