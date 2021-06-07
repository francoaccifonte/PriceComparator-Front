import React, { useState } from 'react';

function Person(props) {
  const [params, setParams] = useState(props)  
  const [name, setName] = useState(props.name)
  const [lastActivity, setLastActivity] = useState(props.lastActivity)

  return (
    <div className="personBox">
      <div className="PersonName">{name}</div>
      <div className="PersonTimestamp">{lastActivity}</div>
    </div>
  );
}

export default Person
