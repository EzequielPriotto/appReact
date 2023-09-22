import React from 'react';

import { ImCross } from "react-icons/im";
import Rosa from './Rosa.svg';
import RosaAmarilla from './RosaAmarilla.svg';
import ImagenAnimalitos from './imagen.png';


function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    position: 'relative',
                    backgroundColor: 'rgb(255 222 222)',
                    borderRadius: '5px',
                    padding: '20px',
                    width: '550px',
                    height: '350px',
                    boxShadow: '-1px 1px 20px #e9373761',
                }}
            >
                <ImCross
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                    onClick={onClose}
                >

                </ImCross>
                <h1 style={{
                    color: 'pink',
                    WebkitTextStrokeWidth: '0.00001px',
                    WebkitTextStrokeColor: '#ff8f8fb5'
                }}
                >{'Feliz primavera Matu <3'} </h1>
                <img src={Rosa} style={{
                    transform: 'rotate(-28deg) translate(76px, 33px)',
                    filter: 'blur(0.3px)',
                    pointerEvents: 'none',

                }} />
                <img src={RosaAmarilla} style={{
                    position: 'absolute',
                    top: '5px',
                    left: '-2px',
                    height: '10rem',
                }} />

                <img src={ImagenAnimalitos} style={{
                    position: 'absolute',
                    top: '223px',
                    left: '1px',
                    height: '9rem',
                }} />

            </div>
        </div>
    );
}

export default Modal;