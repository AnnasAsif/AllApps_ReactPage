import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import LoveFramesApp from './DisplayComponents/LoveFramesApp';
import NaturePhotosApp from './DisplayComponents/NaturePhotosApp';
import SmartyMenApp from './DisplayComponents/SmartyMenApp';
import PicCollageApp from './DisplayComponents/PicCollageApp';
import WeddingApp from './DisplayComponents/WeddingApp';
import PoliceSuits from './DisplayComponents/PoliceSuits';

export class DisplayApp extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <>
        {
            this.props.flags.loveframe === true &&
            <LoveFramesApp
                data={this.props.data}
                setTrigger={this.props.setTrigger} 
                setPic={this.props.setPic}
                setFlags={this.props.setFlags}
                setData= {this.props.setData}
            />
        }
        {
          this.props.flags.naturephoto === true &&
          <NaturePhotosApp
              data={this.props.data}
              setTrigger={this.props.setTrigger} 
              setPic={this.props.setPic}
              setFlags={this.props.setFlags}
              setData= {this.props.setData}
          />
        }
        {
          this.props.flags.smartymen === true && 
          <SmartyMenApp
            data= {this.props.data}
            setTrigger={this.props.setTrigger} 
            setPic={this.props.setPic}
            setFlags={this.props.setFlags}
            setData= {this.props.setData}
          />
        }
        {
          this.props.flags.collagemaker === true && 
          <PicCollageApp
            data= {this.props.data}
            setTrigger={this.props.setTrigger} 
            setPic={this.props.setPic}
            setFlags={this.props.setFlags}
            setData= {this.props.setData}
          />
        }
        {
          this.props.flags.weddingdress === true && 
          <WeddingApp
            data= {this.props.data}
            setTrigger={this.props.setTrigger} 
            setPic={this.props.setPic}
            setFlags={this.props.setFlags}
            setData= {this.props.setData}
          />
        }
        {
          this.props.flags.policesuits === true && 
          <PoliceSuits
            data= {this.props.data}
            setTrigger={this.props.setTrigger} 
            setPic={this.props.setPic}
            setFlags={this.props.setFlags}
            setData= {this.props.setData}
          />
        }
      </>
    )
  }
}

export default DisplayApp