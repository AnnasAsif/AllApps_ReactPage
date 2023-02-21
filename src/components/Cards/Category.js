import React from 'react'

function Category(props) {
    return (
        
        <span className="card">
          <img src={props.image} alt="Avatar" style={{width:'100%'}}/>
          <span className="container">
            <h4>{props.name}</h4>
          </span>
          <input type='submit' value='Show Data' onClick={()=>{props.onClick()}}/>
        </span>
            
    );
}

export default Category