import React from 'react'

import './styles.css'

import closeIcon from '../../assets/icons/close.svg'
import sandalsImg from '../../assets/images/product-sandal.jpg'

export default function ModalAddCart(props:any) {
  return(
    <div className={props.className}>
      <div id="modal-add-content">
        <img id='close-icon'src={closeIcon} alt="Close-icon"/>
        <img id='product-photo' src={sandalsImg} alt="Sandals"/>
        <h1>Produto adicionado com sucesso!</h1>
        <button>Finalizar compra</button>
        <span>Continuar Comprando</span>
      </div>
  </div>
  )
}