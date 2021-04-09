import React, {useState} from 'react';

const AddVisitorForm = (props) => {

    const initVisitor = {id: null, name: '', numInParty: ''};

    const [visitor, setVisitor] = useState(initVisitor);

    const handleChange = e => {
        const {name, value} = e.target;
        setVisitor({...visitor, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (visitor.name && visitor.numInParty) {
           handleChange(e, props.addVisitor(visitor));
        }
    }

    return (
        <div>
            <form >
                <label>Name</label>
                <input className="u-full-width" type="text" value={visitor.name} name="name" onChange={handleChange} />
                <br/>
                <label>Number in Party</label>
                <input className="u-full-width" type="text" value={visitor.numInParty} name="numInParty" onChange={handleChange} />
                <br/>
                <button className="btn-block btn-dark" type="submit" onClick={handleSubmit} >Add visitor</button>
            </form>
        </div>
    )
}

export default AddVisitorForm;