import React, { Component } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';

export class NaturePhoto extends Component {
    constructor(props){
        super(props);

        this.background={bg:[]};
        this.overlay={ol:[]};
        this.thumbnail={tn:[]};
        this.handleBackground= this.handleBackground.bind(this);
        this.handleOverlay = this.handleOverlay.bind(this);
        this.handleThumbnail = this.handleThumbnail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleBackground=(event)=>{
        console.log(typeof(event.target.files[0]));
        this.background.bg = event.target.files[0];
        console.log('=================>>>>>>',this.background);
    }
    handleOverlay=(event)=>{
        console.log(typeof(event.target.files[0]));
        this.overlay.ol = event.target.files[0];
        console.log('=================>>>>>>',this.overlay);
        
    }
    handleThumbnail=(event)=>{
        console.log(typeof(event.target.files[0]));
        this.thumbnail.tn = event.target.files[0];
        console.log('=================>>>>>>',this.thumbnail);

    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        // const formData = new FormData();
        // console.log('bg', this.background['bg'])
        // formData.append('bg', this.background['bg'])
        // // for (let x in this.background) {
        // //   formData.append(x, this.state[x]);          //saving data in formData
        // //   console.log(x, ': ', this.state[x]);
        // // }
        //  var api= "http://172.16.0.107:9010/api/frames/saveFrame";
         
        //  if(api){
        //   const data = await fetch(api, {
        //     method: "post",
        //     // headers: { "Content-Type": "multipart/form-data" },
        //     body: formData,
        //   });
        //   const uploadedImage = await data.json();
        //   console.log(uploadedImage);
        // }
        alert("Frame is saved");
        this.props.setFlags('0')
    }

  render() {
    return (
        <div className="popup">
            <div className="popup-inner">
                <CancelIcon className="close-btn" onClick={()=>{this.props.setFlags('0')}}/>
                <h1>{this.props.data.categoryName}</h1>
                <h3>{this.props.data.bundlename}</h3>
                <form className='form-box' onSubmit={this.handleSubmit}>
                    <br/>
                    <b>Upload Background : </b>
                    <input type="file" required onChange={this.handleBackground}/>
                    <br/>
                    <b>Upload Overlay : </b>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <input type="file" required onChange={this.handleOverlay}/>
                    <br/>
                    <b>Upload Thumbnail : </b>
                    &nbsp;&nbsp;
                    <input type="file" required onChange={this.handleThumbnail}/>
                    <br/>
                     <input type="submit" value="Upload Data" onClick={()=>{}}/>

                </form>  
                {/* <img className='imgPopup' src={props.pic} alt='Single Frame' key={props.pic}/> */}
            </div>
        </div>
    )
  }
}

export default NaturePhoto