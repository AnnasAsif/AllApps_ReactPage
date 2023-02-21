import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Category from '../Cards/Category';

export class NaturePhotsApp extends Component {
    constructor(props){
        super(props);

        this.state = {
          bundles:[],
          bundlename:'',
          bundlesdisplay: false,
          categoryName:'',
          frames:[],
          framesdisplay: false
        }
        this.temp = ''
        this.loadBundles = this.loadBundles.bind(this);
        this.loadframes = this.loadframes.bind(this);
    }

    async loadBundles(categoryName){
      this.setState({framesdisplay:false})
      await fetch(`http://161.97.164.28:8080/api/assets/getcategories`)
      .then((response) => response.json())
      .then( (actualData) => {
        if(actualData)
        {
          this.setState({
            bundles: actualData, 
            bundlesdisplay: true,
          });
          this.setState({categoryName:categoryName});
          console.log(this.state);
          console.log(this.temp);
        }
        else
          console.log("ERROR");
      })
      .catch((err) => {
       console.log(err.message);
      }); 
    }

    async loadframes(bundle){
      console.log(this.temp);
      console.log(bundle);

      await fetch(`http://161.97.164.28:8080/api/assets/getNatureAssets?folder=${this.state.categoryName}&tag=${bundle}`)
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
                  <input type='submit' value={subcategory} onClick={()=>{this.loadBundles(subcategory)}}/>
                  &nbsp;&nbsp;
                </span>
            ))
        }
        </div>

        {
          this.state.bundlesdisplay === true &&
          <>
          <hr/>
          <br/>
          <div  style={{display:'flex', flexDirection:'row'}}>
          {
            this.state.bundles.map(options=>(
              <span style={{width:`${100/(this.state.bundles.length)}%`}}>
                &nbsp;&nbsp;
                <input type='submit' value={options} onClick={()=>{this.loadframes(options)}}/>
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
              this.props.setFlags('2')
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

export default NaturePhotsApp