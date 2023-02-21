import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Category from '../Cards/Category';

export class PicCollageApp extends Component {
    constructor(props){
        super(props);

        this.state = {
          bundlename:'',
          frames:[],
          framesdisplay: false
        }
        this.temp = ''
        this.loadframes = this.loadframes.bind(this);
    }

    async loadframes(bundle){
      console.log(this.temp);
      console.log(bundle);

      await fetch(`http://164.68.111.220:9001/api/tas/collageAssetsByTag?tag=${bundle}`)
      .then((response) => response.json())
      .then( (actualData) => {
        console.log('response: ', actualData);
        if(actualData){
            this.setState({
              frames: actualData,
              framesdisplay: true,
              bundlename: bundle
            })
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
        <br/>
        <div style={{display:'flex', flexDirection:'row'}}>
        {
            this.props.data.map(subcategory=>(
                
                <span style={{width:'20%'}}>  
                                            
                  &nbsp;&nbsp;
                  <input type='submit' value={subcategory} onClick={()=>{this.loadframes(subcategory)}}/>
                  &nbsp;&nbsp;
                </span>
            ))
        }
        </div>

        
        <hr/>

        {
          (this.state.framesdisplay === true) &&
          <>
          <h1>{this.state.bundlename}</h1>
          <img 
            className='imgShow' 
            src='https://icon-library.com/images/creat-icon/creat-icon-10.jpg' 
            alt="Frames" 
            onClick={()=>{
              this.props.setFlags('4')
              this.props.setData(this.state)
            }}
          ></img>
        {
          this.state.frames.map(result=>(
            <>
              <img 
                className='imgShow' 
                key={result.image} 
                src={result.image} 
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

export default PicCollageApp