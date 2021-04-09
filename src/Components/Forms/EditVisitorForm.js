import React, {useState, useEffect} from 'react';

const EditVisitorForm = (props) => {

    const [visitor, setVisitor] = useState(props.currentVisitor);

    const handleChange = e => {
        const {name, value} = e.target;
        setVisitor({...visitor, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (visitor.name && visitor.numInParty) props.updateVisitor(visitor);
    }

    useEffect(() => {
        setVisitor(props.currentVisitor)
    }, [props])


    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={visitor.name} name="name" onChange={handleChange} />
            <label>Number in Party</label>
            <input className="u-full-width" type="text" value={visitor.username} name="numInParty" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit} >Edit Visitor</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditVisitorForm;