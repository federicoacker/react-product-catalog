
function Filter({ label, type, changeHandler, value, options, name }) {
    return (
        type === "text" ?
            <div>
                <label htmlFor={name}>{ label }</label>
                <input className="form-control mb-3" type="text" onChange={changeHandler} value={value} name={name} id={name} placeholder="Cerca" />
            </div> :
        type === "select" ?
            <div>
                <label htmlFor={name}>{ label }</label>
                <select className="form-select mb-3" value={value} onChange={changeHandler} name={name} id={name}>
                    {options.map(option => <option key={option.id} value={option.value}>{option.name}</option>)}
                </select>
            </div> :
        null
    )
}

export default Filter