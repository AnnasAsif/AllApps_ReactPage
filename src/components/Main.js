import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayApp from './DisplayApp';
import TextBox from './Cards/TextBox';

import AddInApps from './AddInApps';

export class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
          displayinfo: false,
          data:[],
        }  
        this.apps = {
          loveframe: false, 
          naturephoto: false, 
          smartymen: false, 
          collagemaker: false,
          weddingdress: false,
          policesuits: false
        }
        this.handleApp = this.handleApp.bind(this);
    }

    async handleApp(category){

      this.setState({displayinfo: true})

      this.apps.loveframe = false;
      this.apps.naturephoto = false;
      this.apps.smartymen = false;
      this.apps.collagemaker = false;
      this.apps.weddingdress = false;
      this.apps.policesuits = false;
      
      if(category.label === 'Love Photo Frames'){
        this.apps.loveframe = true;

        await fetch(`http://161.97.164.28:8080/api/categories/seemore`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData){
            this.setState({data: actualData.content})
            console.log('response:', this.state.data);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
        console.log(this.state);
      }else if(category.label === 'Nature Photo Editor'){
        this.apps.naturephoto = true;

        await fetch(`http://161.97.164.28:8080/api/assets/getnaturetags`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData){
            this.setState({data: actualData})
            console.log('response:', this.state.data);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
        console.log(this.state);
        
      }else if(category.label === 'Smarty Men Jacket'){
        this.apps.smartymen = true;

        await fetch(`http://161.97.164.28:9005/api/assets/gettags`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData){
            this.setState({data: actualData})
            console.log('response:', this.state.data);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
        console.log(this.state);
      }else if(category.label === 'Pic Collage Maker'){
        this.apps.collagemaker = true;

        await fetch(`http://164.68.111.220:9001/api/tas/getCollageCategories`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData){
            this.setState({data: actualData})
            console.log('response:', this.state.data);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
        console.log(this.state);

      }else if(category.label === 'Wedding Dress Photo'){
        this.apps.weddingdress = true;

        await fetch(`http://161.97.164.28:9005/api/supercategory/getsupercategories`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData.flag){
            this.setState({data: actualData.categories})
            console.log('response:', this.state.data);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
        console.log(this.state);

      }else if(category.label === 'Police Suits Editor'){
        this.apps.policesuits = true;

        await fetch(`http://213.136.75.99:9004/api/frames/getcategories`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData){
            this.setState({data: actualData})
            console.log('response:', this.state.data);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
        console.log(this.state);

      }
      console.log(this.apps);
    }

  render() {
    return (
      <>
      
      {/* Displaying Apps Available */}
        <h1>APPS</h1>
        <div style={{display:'flex', flexDirection:'row'}}>
        {
          this.props.categories.map(category=>(
            <span style={{width:`${100/(this.props.categories.length)}%`}}>
            
                <TextBox
                  name = {category.label}
                  ip = {category.ip}
                  bundleid = {category.bundleid}
                  store = {category.store}
                  onClick={()=>{this.handleApp(category)}}
                />
            </span>
          ))
        }
        </div>
        <hr/>

        <DisplayApp
          flags={this.apps}
          data={this.state.data}
          setTrigger={this.props.setTrigger} 
          setPic={this.props.setPic}
          setFlags={this.props.setFlags}
          setData= {this.props.setData}
        />
        <AddInApps
          setFlags= {this.props.setFlags}
          flags= {this.props.flags}
          data={this.props.data}
        />
      </>
    )
  }
}

export default Main