import React, { Component } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';

export class WeddingFrame extends Component {
    constructor(props){
        super(props);

        this.state= {
          image: []
        }

        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      

    handleImage = (event) =>{
      console.log('=======================', event.target);
      
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
                <h1>{this.props.data.supercategoryName}</h1>
                {
                  this.props.data.categorydisplay === true &&
                  <h3>{this.props.data.categoryname}</h3>
                }
                {
                  this.props.data.subcategorydisplay === true &&
                  <h5>{this.props.data.subcategoryname}</h5>
                }
                <form className='form-box' onSubmit={this.handleSubmit}>
                    <br/>
                    <b>Upload Image : </b>
                    <input type="file" required onChange={this.handleImage}/>
                    <br/>    
                    <input type="submit" value="Upload Data" onClick={()=>{}}/>
                </form>
                {/* <img className='imgPopup' src={props.pic} alt='Single Frame' key={props.pic}/> */}
            </div>
        </div>
    )
  }
}

export default WeddingFrame