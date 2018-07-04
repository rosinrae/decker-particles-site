import React from 'react'
import BasicPage from '../components/basic-page'
import {TM, Title, Subtitle} from '../components/text'
import Link from '../components/link'
import Footer from '../components/footer'

export default () => (
  <BasicPage title="">
    <Title><TM>MegaParticle</TM> Coating Flake</Title>
    <p><Link to="#">Stock</Link> <Link to="#">Custom</Link></p>
    <article>
    <dl>
      <dt>Shape</dt>
      <dd>Although traditional powder coatings are tiny (typical average size is 45 microns), much larger particles may be applied by electrostatic spray if they are flake-shaped</dd>
      <dt>Size</dt>
      <dd>An average powder coating particle has a volume of 5.5<sup>-9</sup> in<sup>3</sup>. A half-inch MegaParticle flake has a volume of 2.5x10<sup>-3</sup> in<sup>3</sup>, more than 450,000 X as large.</dd>
      <dt>Effect</dt>
      <dd>When you blend black and white powder, you get gray. When you blend black and white flake, you get excitement!</dd>
      <dt>Compatibility</dt>
      <dd><TM>MegaParticle</TM> coating flake is available in all the same chemistries, colors, and glosses as powder coatings. Flake may be co-applied with powder, and co-cured.</dd>
    </dl>
  </article>
  <Footer>Call <big>208-881-8245</big> for <TM>MegaParticle</TM> flake</Footer>
  </BasicPage>
)
