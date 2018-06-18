import React from 'react'
import BasicPage from '../components/basic-page'
import {List, Header} from 'semantic-ui-react'
const IndexPage = () => (
  <BasicPage title="The Decker Particles Inc. Story">
    <article>
    <Header size="medium">What Powder Coatings Can Do</Header>
    <List relaxed={true} bulleted={true}>
      <List.Content>
        <List.Item>Show excellent appearance, weather and chemical resistance.</List.Item>
        <List.Item>Exhibit efficient application</List.Item>
        <List.Item>Achieve low cost</List.Item>
        <List.Item>Provide uniform appearance</List.Item>
        <List.Item>Provide the mechanical properties of un-reinforced plastics</List.Item>
      </List.Content>
    </List>
    <Header size='medium'>What Powder Coatings <em>Cannot</em> Do</Header>
    <List relaxed={true} bulleted={true}>
      <List.Content>
        <List.Item>Provide large-scale color variations</List.Item>
        <List.Item>Include large reinforcing material</List.Item>
        <List.Item>Provide the properties of composite materials (e.g. gouge resistance or hardness with flexibility)</List.Item>
        <List.Item>Include information such as pictures, bar codes, or text</List.Item>
      </List.Content>
    </List>
    <Header size='large'>The Decker Particles Idea</Header>
    <p>Expand the technology of powder coatings by developing sprayable flake particles of 500µm, 1mm, 2mm, 5mm, 1cm or more in diameter.</p>
    <p>Exploration of the <strong>Decker Particles Idea</strong> led us to develop the following brand new, novel products, and bring them to the market for the first time:</p>
    <List bulleted>
      <List.Content>
        <List.Item>
          Large, sprayable coating precursor materials - <strong>MegaParticle™</strong> coating materials
        </List.Item>
        <List.Item>
          Large-bore equipment for applying large particles - <strong>MegaBore™</strong> coating equipment 
        </List.Item>
      </List.Content>
    </List>

    
  </article>
    
  </BasicPage>
)

export default IndexPage
