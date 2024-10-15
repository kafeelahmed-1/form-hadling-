import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    name: 'Ahmed Swati',
    age: 24,
    address: 'Abbottabad',
    phoneNumber: '0312-1588397',
  });
  
  const [newData, setNewData] = useState({ name: '', age: '', address: '', phoneNumber: '' });
  const [showActions, setShowActions] = useState(false);
  const [additionalEntries, setAdditionalEntries] = useState([]);

  const handleEdit = () => {
    setShowActions(!showActions);
  };

  const handleUpdate = () => {
    setUser({
      ...user,
      name: newData.name !== '' ? newData.name : user.name,
      age: newData.age !== '' ? newData.age : user.age,
      address: newData.address !== '' ? newData.address : user.address,
      phoneNumber: newData.phoneNumber !== '' ? newData.phoneNumber : user.phoneNumber,
    });
  
    setNewData({ name: '', age: '', address: '', phoneNumber: '' });
    setShowActions(false);
  };
  
  const handleDelete = () => {
    setUser({
      name: '',
      age: '',
      address: '',
      phoneNumber: ''
    });
    setShowActions(false);
  };

  const handleInsert = () => {
    setAdditionalEntries([...additionalEntries, newData]);
    setNewData({ name: '', age: '', address: '', phoneNumber: '' });
    setShowActions(false);
  };

  const handleDeleteAdditional = (index) => {
    const updatedEntries = additionalEntries.filter((_, i) => i !== index);
    setAdditionalEntries(updatedEntries);
  };
  const handleLogOut=()=>{
    navigate('/Login');
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">UpWard!</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">UserProfile</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className='profile-heading'>
        <h1><FontAwesomeIcon icon={faUser} /> User Profile</h1>
      </div>
      <div className="profile-container">
        <div className="user-info">
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>Phone Number: {user.phoneNumber}</p>
<button onClick={handleLogOut}>Logout</button>
          <button onClick={handleEdit}>
            {showActions ? 'Hide Actions' : 'Edit'}
          </button>

          {showActions && (
            <div className="action-buttons">
              <h2>Actions</h2>
              <input
                type="text"
                placeholder="Name"
                value={newData.name}
                onChange={(e) => setNewData({ ...newData, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Age"
                value={newData.age}
                onChange={(e) => setNewData({ ...newData, age: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                value={newData.address}
                onChange={(e) => setNewData({ ...newData, address: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newData.phoneNumber}
                onChange={(e) => setNewData({ ...newData, phoneNumber: e.target.value })}
              />
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleInsert}>Insert</button>
            </div>
          )}

          {additionalEntries.length > 0 && (
            <div className="additional-entries">
              <h2>Additional Entries</h2>
              {additionalEntries.map((entry, index) => (
                <div key={index} className="entry">
                  <p>Name: {entry.name}</p>
                  <p>Age: {entry.age}</p>
                  <p>Address: {entry.address}</p>
                  <p>Phone Number: {entry.phoneNumber}</p>
                  <button onClick={() => handleDeleteAdditional(index)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="image-container">
          <img 
            src="latest.png"
            alt="User"
            className="profile-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
