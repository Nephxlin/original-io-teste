import React from 'react'

import './styles.css'

export default function ModalAdd(props: any){
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <p>Meu modal!</p>
        </div>
    )
}