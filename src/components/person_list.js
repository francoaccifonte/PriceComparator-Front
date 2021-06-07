import React, { useState } from 'react';
import CallApi from '../lib/call_api'
import Person from './person'
import './menu.css'

function PersonList(props) {
  let api_client = new CallApi();
  const [people, setPeople] = useState(api_client.people_list());
  const [status, setStatus] = useState('open')


  function ClosedMenu(params) {
    return(
      <i class="fas fa-arrow-right" onClick={()=>{setStatus('open')}}></i>
    );
  };
  
  function OpenMenu() {
    return (
      <>
        <i class="fas fa-arrow-left" onClick={()=>{setStatus('closed')}}></i>
        <ul className="PeopleList">
          {people.map(
            (value, index, array) => {
              return(
              <li><Person name={value.name} lastActivity={value.lastActivity} /></li>
              )
            }
          )}
        </ul>
      </>
    );
  };

  return (
    <div className="People">
      {status==="open" ? OpenMenu() : ClosedMenu()}
    </div>
  );
};

export default PersonList
