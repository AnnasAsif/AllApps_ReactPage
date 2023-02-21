import React from 'react'

function TextBox(props) {
    return (
        <span className="card">
          {/* <img src="" alt="Avatar" style="width:100%"/> */}
          <span className="container">
            <h4><b>{props.name}</b></h4>
            <p><b>IP: </b>{props.ip}</p>
            <p><b>Bundle ID: </b>{props.bundleid}</p>
            <p><b>Store: </b>{props.store}</p>
            <input type='submit' value='Show More' onClick={()=>{props.onClick()}}/>
          </span>
        </span>
            
    );
}

export default TextBox