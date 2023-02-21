import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Category from '../Cards/Category';

export class LoveFramesApp extends Component {
    constructor(props){
        super(props);

        this.state = {
          bundles:[],
          bundlename:'',
          bundlesdisplay: false,
          categoryName:'',
          categoryId: '',
          frames:[],
          framesdisplay: false
        }
        this.temp = ''
        this.loadBundles = this.loadBundles.bind(this);
        this.loadframes = this.loadframes.bind(this);
    }

    async loadBundles(categoryId, categoryName){
      this.setState({framesdisplay:false})
      await fetch(`http://161.97.164.28:8080/api/bundles/retrieveBundles?category=${categoryId}`)
      .then((response) => response.json())
      .then( (actualData) => {
        if(actualData)
        {
          this.setState({
            bundles: actualData.data, 
            bundlesdisplay: true, 
            categoryId: categoryId
          });
          this.temp = categoryName;
          console.log(this.state);
        }
        else
          console.log("ERROR");
      })
      .catch((err) => {
       console.log(err.message);
      }); 
    }

    async loadframes(bundle){
      console.log(this.state.categoryId);
      await fetch(`http://161.97.164.28:8080/api/frames/getRequiredFrames?categoryId=${this.state.categoryId}&bundleName=${bundle}`)
        .then((response) => response.json())
        .then( (actualData) => {
          console.log('response: ', actualData);
          if(actualData.status){
            this.setState({
              frames: actualData.frames, 
              framesdisplay: true,
              bundlename: bundle,
              categoryName: this.temp
            })
            console.log('response:', this.state.frames);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });
    }

  render() {
    return (
      <>
      
      {/* Displaying Apps Available */}
        <h1>Displaying App</h1>
        <div style={{display:'flex', flexDirection:'row'}}>
        {
            this.props.data.map(subcategory=>(
                
                <span style={{width:'20%'}}>  
                                            
                    <Category
                        image={subcategory.thumbnail}
                        name={subcategory.name}
                        onClick={()=>{this.loadBundles(subcategory._id, subcategory.name)}}
                        
                    />
                </span>
            ))
        }
        </div>

        {
          this.state.bundlesdisplay === true &&
          <>
          <br/>
          <div  style={{display:'flex', flexDirection:'row'}}>
          {
            this.state.bundles.map(options=>(
              <span style={{width:`${100/(this.state.bundles.length)}%`}}>
                &nbsp;&nbsp;
                <input type='submit' value={options.label} onClick={()=>{this.loadframes(options.label)}}/>
                &nbsp;&nbsp;
              </span>
            ))
          }
          </div>
          </>
        }
        <hr/>

        {
          (this.state.framesdisplay === true) &&
          <>
          <h1>{this.state.categoryName}</h1>
          <h3>{this.state.bundlename}</h3>
          <img 
            className='imgShow' 
            src='https://icon-library.com/images/creat-icon/creat-icon-10.jpg' 
            alt="Frames" 
            onClick={()=>{
              this.props.setFlags('1')
              this.props.setData(this.state)
            }}
            
          ></img>
        {
          this.state.frames.map(result=>(
            <>
              <img 
                className='imgShow' 
                key={result.thumbnail} 
                src={result.thumbnail} 
                alt="Frames" 
                onClick={()=>{this.props.setTrigger(true); this.props.setPic(result.image)}}
              ></img>
            </>
          ))
        }
        </>
      }

      </>
    )
  }
}

export default LoveFramesApp