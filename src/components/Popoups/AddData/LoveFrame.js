import React, { Component } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';

export class LoveFrame extends Component {
    constructor(props){
        super(props);

        this.state={ //values required for single frame to send to backend
            X:'',
            Y:'',
            W:'',
            H:'',
            categoryId: this.props.data.categoryId,
            bundle:this.props.data.bundlename,
            image: [],
            images:[],
            folder: this.props.data.categoryName
        }
        this.handleX = this.handleX.bind(this)
        this.handleY = this.handleY.bind(this)
        this.handleH = this.handleH.bind(this)
        this.handleW = this.handleW.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.handleImages = this.handleImages.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleX=(event)=>{console.log(event.target.value); this.setState({X: event.target.value})}
    handleY=(event)=>{console.log(event.target.value); this.setState({Y: event.target.value})}
    handleH=(event)=>{console.log(event.target.value); this.setState({H: event.target.value})}
    handleW=(event)=>{console.log(event.target.value); this.setState({W: event.target.value})}
    handleImage=(event)=>{
      console.log(typeof(event.target.files[0]));
      this.setState({image: event.target.files[0]}); 
      console.log('=================>>>>>>',this.state);
    }
    handleImages=(event)=>{
      const imagesArray = Array.from(event.target.files); // Convert FileList to array

      console.log(imagesArray);
      this.setState({images: imagesArray},()=>{
        console.log('=================>>>>>>',this.state.images);

      }); 
    }
    handleSubmit = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        for (let x in this.state) {
          if(x !== 'images'){
            formData.append(x, this.state[x]);          //saving data in formData
            console.log(x, ': ', this.state[x]);

          }
        }
        this.state.images.forEach((image, index) => {
          formData.append(`images`, image);
        });
         var api= "http://172.16.0.94:9001/api/templates/temporary";
         
         if(api){
          const data = await fetch(api, {
            method: "post",
            // headers: { "Content-Type": "multipart/form-data" },
            body: formData,
          });
          const uploadedImage = await data.json();
          console.log(uploadedImage);
          alert("Frame is saved");
          this.props.setFlags('0')
         }
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
                    Coordinates
                    <br/>
                    X:&nbsp;
                    <input type="text1" value={this.state.X} onChange={this.handleX}/>
                    &nbsp;&nbsp;&nbsp;
                    Y:&nbsp;
                    <input type="text2" value={this.state.Y} onChange={this.handleY}/>
                    <br/>
                    Position
                    <br/>
                    H:&nbsp;
                    <input type="text3" value={this.state.H} onChange={this.handleH}/>
                    &nbsp;&nbsp;
                    W:&nbsp;
                    <input type="text4" value={this.state.W} onChange={this.handleW}/>
                    <br/>
                    <b>Upload Frame: </b>
                    <input type="file" required onChange={this.handleImage}/>
                    <br/>
                    <b>Upload Frames: </b>
                    <input type="file" multiple required onChange={this.handleImages}/>
                    <br/>
                    
                    <input type="submit" value="Upload Data" onClick={()=>{}}/>
                    
            </form> 
                {/* <img className='imgPopup' src={props.pic} alt='Single Frame' key={props.pic}/> */}
            </div>
        </div>
    )
  }
}

export default LoveFrame