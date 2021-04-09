import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import React, {useState} from 'react'
import visitorList from './data.js';
import VisitorTable from './Tables/VisitorTable';
import EditVisitorForm from './Forms/EditVisitorForm';
import AddVisitorForm from './Forms/AddVisitorForm';


const Visitors = () => {
 
  const [visitors, setVisitors] = useState(visitorList);

  const addVisitor = (visitor) => {
    visitor.id = visitors.length;
    setVisitors([...visitors, visitor]);
  };

  const deleteVisitor = (id) => {
    setVisitors(visitors.filter((visitor) => visitor.id !== id));
  };
  
  <VisitorTable visitors={visitors} deleteVisitor={deleteVisitor} />
  
  const [editing, setEditing] = useState(false);

  const initialVisitor = { id: null, name: "", numInParty: "" };

  const [currentVisitor, setCurrentVisitor] = useState(initialVisitor);

  const editVisitor = (id, visitor) => {
    setEditing(true);
    setCurrentVisitor(visitor);
  };

  const updateVisitor = (newVisitor) => {
    setVisitors(
      visitors.map((visitor) => (visitor.id === currentVisitor.id ? newVisitor : visitor))
    );
    setCurrentVisitor(initialVisitor);
    setEditing(false);
  };

  return (
    
    <div className="container">
      <hr/>
      <h1>Zoo Visitors</h1>
      <div className="row">
        <div className="col-5">
          {editing ? (
            <div>
              <h2>Edit visitors</h2>
              <EditVisitorForm
                currentVisitor={currentVisitor}
                setEditing={setEditing}
                updateVisitor={updateVisitor}
              />
            </div>
          ) : (
            <div className="card bg-info text-white">
              <h2>Add visitor</h2>
              <AddVisitorForm addVisitor={addVisitor} />
            </div>
          )}
        </div>
          <div className="card bg-info text-white col-6">
            <h2>View visitors</h2>

            <VisitorTable
              visitors={visitors}
              deleteVisitor={deleteVisitor}
              editVisitor={editVisitor}
            />
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Visitors;