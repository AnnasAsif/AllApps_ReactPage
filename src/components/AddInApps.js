import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import LoveFrame from './Popoups/AddData/LoveFrame';
import NaturePhoto from './Popoups/AddData/NaturePhoto';
import SmartyMen from './Popoups/AddData/SmartyMen';
import PicCollage from './Popoups/AddData/PicCollage';
import WeddingFrame from './Popoups/AddData/WeddingFrame';

export class AddInApps extends Component {
    constructor(props){
        super(props);

    }

  render() {
    return (
      <>
      
        {
            this.props.flags === '1' &&
            <LoveFrame
                setFlags={this.props.setFlags}
                data={this.props.data}
            />
        }

        {
            this.props.flags === '2' &&
            <NaturePhoto
                setFlags={this.props.setFlags}
                data={this.props.data}
            />
        }

        {
            this.props.flags === '3' &&
            <SmartyMen
                setFlags={this.props.setFlags}
                data={this.props.data}
            />
        }

        {
            this.props.flags === '4' &&
            <PicCollage
                setFlags={this.props.setFlags}
                data={this.props.data}
            />
        }

        {
            this.props.flags === '5' &&
            <WeddingFrame
                setFlags={this.props.setFlags}
                data={this.props.data}
            />
        }
      

      </>
    )
  }
}

export default AddInApps