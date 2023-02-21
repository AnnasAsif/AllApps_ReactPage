import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Category from '../Cards/Category';

export class PoliceSuits extends Component {
    constructor(props){
        super(props);

        this.state = {
          supercategoryName:'',

          categories:[],
          categoryname:'',
          categorydisplay:false,

          subcategories:[],
          subcategoryname:'',
          subcategorydisplay: false,

          frames:[],
          framesdisplay: false
        }
        this.temp = ''
        this.loadCategories = this.loadCategories.bind(this);
        this.loadSubCategories = this.loadSubCategories.bind(this);
        this.loadframes = this.loadframes.bind(this);
    }

    async loadCategories(supercategory){
      
      if(!supercategory.category){
        this.setState({categorydisplay:false, subcategorydisplay:false})
        await fetch(`http://161.97.164.28:9005/api/frames/getframesbysupercategory?supercategory=${supercategory.supercategoryName}`)
      .then((response) => response.json())
      .then( (actualData) => {
        console.log('response: ', actualData);
        if(actualData){
            this.setState({
              frames: actualData,
              framesdisplay: true,
              supercategoryName: supercategory.supercategoryName
            })
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });

      }else{
        this.setState({framesdisplay:false, subcategorydisplay:false})
        await fetch(`http://161.97.164.28:9005/api/category/getcategories?supercategory=${supercategory._id}`)
        .then((response) => response.json())
        .then( (actualData) => {
          if(actualData.flag)
          {
            this.setState({
              categories: actualData.categories, 
              categorydisplay: true,
              supercategoryName: supercategory.supercategoryName
            });
            console.log(this.state);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        }); 

      }
    }

    async loadSubCategories(category){
      
      if(!category.subCategory){
        this.setState({subcategorydisplay:false})
        await fetch(`http://161.97.164.28:9005/api/frames/getframesbycategory?category=${category.categoryName}`)
      .then((response) => response.json())
      .then( (actualData) => {
        console.log('response: ', actualData);
        if(actualData){
            this.setState({
              frames: actualData,
              framesdisplay: true,
              categoryname: category.categoryName
            })
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        });

      }else{
        this.setState({framesdisplay:false})
        await fetch(`http://161.97.164.28:9005/api/subcategory/getsubcategoriesbycategory?category=${category.categoryName}`)
        .then((response) => response.json())
        .then( (actualData) => {
          if(actualData)
          {
            this.setState({
              subcategories: actualData, 
              subcategorydisplay: true,
              categoryname: category.categoryName
            });
            console.log(this.state);
          }
          else
            console.log("ERROR");
        })
        .catch((err) => {
         console.log(err.message);
        }); 

      }
    }

    async loadframes(subcategory){
      
      await fetch(`http://161.97.164.28:9005/api/frames/getframesbysubcategory?subcategory=${subcategory}`)
      .then((response) => response.json())
      .then( (actualData) => {
        console.log('response: ', actualData);
        if(actualData){
            this.setState({
              frames: actualData,
              framesdisplay: true,
              subcategoryname: subcategory
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
            this.props.data.map(supercategory=>(
                
                <span style={{width:'20%'}}>  
                                            
                  &nbsp;&nbsp;
                  <input 
                    type='submit' 
                    value={supercategory} 
                    onClick={()=>{
                      this.loadCategories(supercategory)
                    }}
                  />
                  &nbsp;&nbsp;
                </span>
            ))
        }
        </div>

        {
          this.state.categorydisplay === true &&
          <>
          <hr/>
          <br/>
          <div  style={{display:'flex', flexDirection:'row'}}>
          {
            this.state.categories.map(options=>(
              <span style={{width:`${100/(this.state.categories.length)}%`}}>
                &nbsp;&nbsp;
                <input type='submit' value={options.categoryName} onClick={()=>{this.loadSubCategories(options)}}/>
                &nbsp;&nbsp;
              </span>
            ))
          }
          </div>
          </>
        }

        {
          this.state.subcategorydisplay === true &&
          <>
          <hr/>
          <br/>
          <div  style={{display:'flex', flexDirection:'row'}}>
          {
            this.state.subcategories.map(options=>(
              <span style={{width:`${100/(this.state.subcategories.length)}%`}}>
                &nbsp;&nbsp;
                <input 
                  type='submit' 
                  value={options.subCategoryName.split("_")[0]} 
                  onClick={()=>{this.loadframes(options.subCategoryName)}}
                />
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
          <h1>{this.state.supercategoryName}</h1>
          {
            this.state.categorydisplay === true &&
            <h3>{this.state.categoryname}</h3>
          }
          {
            this.state.subcategorydisplay === true &&
            <h5>{this.state.subcategoryname}</h5>
          }
          <img 
            className='imgShow' 
            src='https://icon-library.com/images/creat-icon/creat-icon-10.jpg' 
            alt="Frames" 
            onClick={()=>{
              this.props.setFlags('5')
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

export default PoliceSuits