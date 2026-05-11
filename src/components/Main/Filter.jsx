
function Filter({type, changeHandler, value, options}) {
    return (
        type === "text" ? 
        <input type="text" onChange={ changeHandler } value={ value }/> :
        type === "select" ?
        <select value={ value } onChange={ changeHandler }>
            {options.map(option => <option key={ option.id } value={ option.value }>{ option.name }</option>)}
        </select> :
        null
    )
}

export default Filter