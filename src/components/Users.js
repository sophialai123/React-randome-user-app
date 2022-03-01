import React from 'react';

function Users(props) {

  return (
    <div className='card-container'>
      <div className="card">
        <div className='top'>
          <h3 className='name'>{props.first} {props.last}</h3>
          <img className="circle-img" src={props.picture}></img>
        </div>
        <div className='bottom'>
          <p className='info'>Gender: {props.gender}</p>
          <p className='info'>Email: {props.email}</p>
        </div>
      </div>
    </div>

  );
}

export default Users;


