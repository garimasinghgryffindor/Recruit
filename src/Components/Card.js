import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
        <div className="card-header">username: {props.name}</div>
        <div className="card-body">
            <h5 className="card-title">{props.location}</h5>
            <p className="card-text">Role: {props.role}</p>
        </div>
    </div>
  )
}

export default Card