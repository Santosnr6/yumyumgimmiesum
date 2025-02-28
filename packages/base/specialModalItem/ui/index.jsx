import './index.css';
import { useState, useEffect } from 'react';

export const SpecialModalItem = ({product}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(product.qty);
    }, [product]);

    const decrease = (product) => { 
        if(product.qty > 0) product.qty -= 1; 
        setCounter(product.qty);
    } 
    const increase = (product) => {
        product.qty += 1;
        setCounter(product.qty);
    };

    return (
        <li className="modal__list-item">
            { product.name } 
            <div className="modal__list-counter">
                <p className="modal__list-counter-item" onClick={ () => decrease(product) }>-</p>
                <p className="modal__list-counter-item">{ counter }</p>
                <p className="modal__list-counter-item" onClick={ () => increase(product) }>+</p>
            </div>
        </li>
    );
}