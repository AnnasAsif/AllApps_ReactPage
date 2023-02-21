import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';

function DisplayFrame(props) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <CancelIcon className="close-btn" onClick={()=>{props.setTrigger(false)}}/>
                <img className='imgPopup' src={props.pic} alt='Single Frame' key={props.pic}/>
            </div>
        </div>
    ): "";
}

export default DisplayFrame