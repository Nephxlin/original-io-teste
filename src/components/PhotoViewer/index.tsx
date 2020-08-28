import React from 'react'

import sandalsImg from '../../assets/images/product-sandal.jpg'

import './styles/mobile.css'
import './styles/desktop.css'

import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import elipseMargenta from '../../assets/icons/elipse-color-margenta.svg'
import elipseOcean from '../../assets/icons/elipse-color-ocean.svg'
import elipseBrown from '../../assets/icons/elipse-color-brown.svg'
import elipseBlack from '../../assets/icons/elipse-color-black.svg'


function PhotoViewer(){
  return(
     <div className="photo-viewer">
       
       <h1>Quem viu, viu também</h1>
        <div className="photo-loader">
          <img src={sandalsImg} alt="Sandals"/>
          <img src={sandalsImg} alt="Sandals"/>
          <img src={sandalsImg} alt="Sandals"/>
          <img src={sandalsImg} alt="Sandals"/>
        </div>

      {/* ONLY MOBILE */}
        <div className="photo-viewer-mobile">
          <div className="photo-loader-mobile">
            <img src={sandalsImg} alt="Sandals"/>
            <img src={sandalsImg} alt="Sandals"/>
             
            <div id="product-info-mobile">
              <p>R$ 204,90</p>
              <span>Ou 6x de R$ 34,15</span>
            </div>
            <div id="product-info-mobile">
              <p>R$ 204,90</p>
              <span>Ou 6x de R$ 34,15</span>
            </div>
          </div>
         
        </div>
      {/* END */}
      <div className="photo-info">
        <div id="product-info">
            <p>R$ 204,90</p>
          <div id="product-colors">
            <img src={elipseMargenta} alt="elipse margenta"/>
            <img src={elipseOcean} alt="elipse ocean"/>
            <img src={elipseBrown} alt="elipse brown"/>
            <img src={elipseBlack} alt="elipse black"/>
           </div>
            
        </div>

        <div id="product-info">
            <p>R$ 204,90</p>
            <div id="product-colors">
            <img src={elipseMargenta} alt="elipse margenta"/>
            <img src={elipseOcean} alt="elipse ocean"/>
            <img src={elipseBrown} alt="elipse brown"/>
            <img src={elipseBlack} alt="elipse black"/>
           </div>
        </div>

        <div id="product-info">
            <p>R$ 204,90</p>
            <div id="product-colors">

           </div>
        </div>

        <div id="product-info">
            <p>R$ 204,90</p>
            <div id="product-colors">
            <img src={elipseOcean} alt="elipse ocean"/>
            <img src={elipseBrown} alt="elipse brown"/>
            <img src={elipseBlack} alt="elipse black"/>
           </div>
        </div>

      </div>
      


      <div className="arrow-box">
        <img src={arrowLeft }alt="" id="arrow"/>
        <p>1 de 3</p>
        <img src={arrowRight} alt="" id="arrow"/>
      </div>

     
     </div>
     
  )
  
}
export default PhotoViewer;

