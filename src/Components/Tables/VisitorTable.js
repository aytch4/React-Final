import React from 'react';

const VisitorTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Number in Party</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.visitors.length > 0 ? (
                    props.visitors.map(visitor => {
                        const {id, name, numInParty} = visitor;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{numInParty}</td>
                                <td>
                                    <button onClick={() => props.deleteVisitor(id)}>Delete</button>
                                    <button onClick={() => props.editVisitor(id, visitor)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No visitors found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default VisitorTable;