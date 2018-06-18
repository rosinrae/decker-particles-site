import React from 'react'
import BasicPage from '../components/basic-page'
import {Header, Image} from 'semantic-ui-react'
//import Img from 'gatsby-image'
import model from '../assets/spray-gun-model-SG01.png'

export default () => (
  <BasicPage title="MegaBore™ Equipment">
    <Image title='Spray System 1 Diagram'
      src={model}
      label="Spray System 1"
      size="large"
      alt="schematic for MegaBore™ spray system model SG01"
    />
  </BasicPage>
)
