import React, { useState } from 'react'

import sandalsImg from '../../assets/images/product-sandal.jpg'
import bagImg from '../../assets/images/product-bag.jpg'
import leatherBagImg from '../../assets/images/product-leather-bag.jpg'
import chromeSandalsImg from '../../assets/images/product-chrome-sandals.png'

import arrowUp from '../../assets/icons/arrow-up.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import elipseFuscia from '../../assets/icons/elipse-color-fuscia.svg'
import elipseOcean from '../../assets/icons/elipse-color-ocean.svg'
import elipseBrown from '../../assets/icons/elipse-color-brown.svg'
import elipseBlack from '../../assets/icons/elipse-color-black.svg'
import playVideo from '../../assets/icons/play-video.svg'
import closeIcon from '../../assets/icons/close.svg'
import removeIcon from '../../assets/icons/mini-close.svg'
import plus from '../../assets/icons/plus.svg'
import subtract from '../../assets/icons/subtract.svg'

import './styles/mobile.css'
import './styles/desktop.css'

function Main() {

  // Get Color
  const [colorName, setColorName] = useState('Fuscia')

  const [colorOptions, setColorOptions] = useState([
    {
      cor: elipseFuscia,
      name: 'Fuscia',
      selected: 'Enable'
    },
    {
      cor: elipseOcean,
      name: 'Oceano',
      selected: 'Disable'
    },
    {
      cor: elipseBrown,
      name: 'Marrom',
      selected: 'Disable'
    },
    {
      cor: elipseBlack,
      name: 'Preto',
      selected: 'Disable'
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      title: 'Rasteira Tira Dedo',
      img: sandalsImg,
      price: 'R$ 49,50',
      quantity: 1
    },
    {
      title: 'Bolsa',
      img: bagImg,
      price: 'R$ 120,50',
      quantity: 9
    },
    {
      title: 'Bolsa de Couro',
      img: leatherBagImg,
      price: 'R$ 25,50',
      quantity: 3
    },
    {
      title: 'Sandalia Cromada',
      img: chromeSandalsImg,
      price: 'R$ 29,50',
      quantity: 2
    },
    {
      title: 'Bolsa de Couro',
      img: leatherBagImg,
      price: 'R$ 25,50',
      quantity: 6
    },
  ])

  function handleSelectColor(props: string, index: number) {
    for (let item in colorOptions) {
      colorOptions[item].selected = 'Disable'
    }
    if (colorOptions[index].name === props) {
      return colorOptions[index].selected = 'Enable'
    }
  }

  function handleSetColor(props: string, index: number) {
    setColorName(props)
    handleSelectColor(props, index)
  }

  //Get Size
  const [sizeTitle, setSizeTitle] = useState('37')
  const [sizeOptions, setSizeOptions] = useState([
    {
      size: '33',
      selected: 'Disable'
    },
    {
      size: '34',
      selected: 'Disable'
    },
    {
      size: '35',
      selected: 'Disable'
    },
    {
      size: '36',
      selected: 'Disable'
    },
    {
      size: '37',
      selected: 'Enable'
    },
    {
      size: '38',
      selected: 'Disable'
    },
    {
      size: '39',
      selected: 'Disable'
    },
    {
      size: '40',
      selected: 'Disable'
    },
    {
      size: '40',
      selected: 'Disable'
    },
    {
      size: '42',
      selected: 'Disable'
    }
  ])

  function handleSelectSize(props: string, index: number) {

    for (let item in sizeOptions) {
      sizeOptions[item].selected = 'Disable'
    }
    if (sizeOptions[index].size === props) {
      return sizeOptions[index].selected = 'Enable'
    }
  }

  function handleSetSize(props: string, index: number) {
    setSizeTitle(props)
    handleSelectSize(props, index)
  }

  //Open Modal 
  const [modal, setModal] = useState('modal-add-card-disable')
  function HandleModal(props: string) { 
    setModal(props)
  }

  //Open Modal Cart item
  const [modalCart,setModalCart] = useState('modal-cart-content-disable')
  function HandleModalCart(props: string) {
    setModalCart(props)
    setModal('modal-add-card-disable')
  }


  return (

    <section className='main-section'>

      <div className="show-room">
        <div className="left-navigation">
          <legend> <p>Home /<strong> Sapatos</strong></p> </legend>
          <div className="left-nav-bar">
            <div>
              <p>Vídeo</p>
              <img id='video' src={sandalsImg} alt="sandals" />
              <img id='video-play' src={playVideo} alt="Play" />
            </div>


            <img id='arrowUp' src={arrowUp} alt="Arrow Up" />

            <div className="scroling-content">
              <img src={sandalsImg} alt="sandals" />
              <img src={sandalsImg} alt="sandals" />
              <img src={sandalsImg} alt="sandals" />
              <img src={sandalsImg} alt="sandals" />

            </div>

            <img id='arrowDown' src={arrowDown} alt="" />
          </div>
        </div>

        {/* Only In Mobile ! ! ! */}
        <div className="product-photo">

          <h1>Rasteira tira dedo</h1>
          <span>RT 0568 | 03.07.0653</span>

          <img src={sandalsImg} alt="sandals" />
        </div>
        {/* END */}

        <div className="product-details">

          <div className="details-header">
            <h1>Rasteira tira dedo</h1>
            <span>RT 0568 | 03.07.0653</span>
            <div id="price">
              <p>R$69,00 |</p><strong>R$ 55,20</strong>
              <p>Ou 6x de R$ 9,20</p>

            </div>
            {/* ONLY MOBILE */}
            <div id="button">
              <button onClick={() => HandleModal('modal-add-card')}>Adicionar à sacola</button>
            </div>

            {/* END */}

          </div>

          <div className="details-color">
            <p>Cor: <span>({colorName})</span></p>
            <div id="colors-pick">

              <div id="colors-pick">
                {colorOptions.map((color, index) => {
                  return (
                    <img
                      id={color.selected}
                      key={index}
                      src={color.cor}
                      alt={color.name}
                      onClick={() => handleSetColor(`${color.name}`, index)}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="details-size">
            <div id="sizes-propertys">
              <p>Tamanho: <span>({sizeTitle})</span></p>
              <p>Guia de medidas</p>
            </div>

            <div id="sizes-box">
              {sizeOptions.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`${item.selected}`}
                    id="box"
                    onClick={() => handleSetSize(`${item.size}`, index)}
                  >{item.size}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="details-footer">
            <button onClick={() => HandleModal('modal-add-card')}>Adicionar à sacola</button>

            <h3>Descrição</h3>
            <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
          </div>

          <div className={modal}>
            <div id="modal-add-content">
              <img
                id='close-icon'
                src={closeIcon}
                alt="Close-icon"
                onClick={() => HandleModal('modal-add-card-disable')}
              />
              <img id='product-photo' src={sandalsImg} alt="Sandals" />
              <h1>Produto adicionado com sucesso!</h1>
              <button onClick={()=> HandleModalCart('modal-cart-content')}>Finalizar compra</button>
              <span onClick={() => HandleModal('modal-add-card-disable')}>Continuar Comprando</span>
            </div>
          </div>

          {/* Modal ADD CART ITEM */}

          <div className={modalCart}>
            <div id="modal-cart">
              <div id="cart-header">
                <img
                  id='cart-close-icon'
                  src={closeIcon}
                  alt="Close-icon"
                  onClick={()=> HandleModalCart('modal-cart-content-disable')}
                />
                <h1>sacola</h1>
                <span>{cardItems.length} Itens</span>
              </div>

              <div className="products-container">
              {cardItems.map((item , index)=>{
                return(
                  <div key={index} className="cart-product">
                    <div id="product-image">
                      <img src={item.img} alt="sandals" />
                    </div>
                    <div id="product-title">
                      <h2>{item.title}</h2>
                        <strong>{item.price}</strong>
                    </div>
                    <div id="product-quantity">
                      <img src={subtract} alt="subtract" />
                        <p>{item.quantity}</p>
                      <img src={plus} alt="Plus" />  
                    </div>
                    <img src={removeIcon} alt="Remove Icon"/>
                </div>
                )
              })}
                          
                           
            </div>
            <div id="product-alert-promo">
              <p>Faltam R$ xx,xx para você<strong>Ganhar Frete Grátis</strong></p>
            </div>
            <div id="product-container-footer">
              <div id="product-value">
                <p>Total: R$ 149,00</p>
                <span>até 3x de R$ 49,90 sem juros</span>
              </div>

              <button onClick={()=> HandleModalCart('modal-cart-content-disable')}>Finalizar compra</button>
            </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  )

}
export default Main;

