import './index.css';
import { useState, useEffect } from 'react';
import { Header } from "@yumyumApp/header";
import { MenuList } from '@yumyumApp/menuList';
import { Modal, SpecialModal } from "@yumyumApp/modal";

export const MenuPage = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [displaySpecialModal, setDisplaySpecialModal] = useState(false);
    const [activeProduct, setActiveProduct] = useState(null);
    const [activeProducts, setActiveProducts] = useState(null);


    const handleModalClick = (product) => {
        if(Array.isArray(product)) {
            setDisplaySpecialModal(!displaySpecialModal);
            setDisplayModal(false);
            let productName = '';
            if(product[0].type === 'dip') productName = 'dippsås';
            else if(product[0].type === 'drink') productName = 'dryck';
            setActiveProducts({
                name : productName,
                items : product
            });
            
        }
        else {
            setDisplaySpecialModal(false);
            setDisplayModal(!displayModal);
            setActiveProduct(product);
        }
    }

    const closeModal = (event) => { 
        if(event.target.tagName === 'HEADER' || event.target.tagName === 'MAIN' || event.target.tagName === 'H1' || event.target.tagName === 'IMG' || event.target.tagName === 'FIGURE' || event.target.tagName === 'BUTTON') {
            setDisplayModal(false);
            setDisplaySpecialModal(false);
        }
    }

    return (
        <main onClick={(event) => closeModal(event)} className="page menu-page">
            <Header logo={true} cartClass={'outline'} />
            <MenuList onClick={ handleModalClick } />
            { displayModal && <Modal closeModal={ closeModal } product={ activeProduct } /> }
            { displaySpecialModal && <SpecialModal closeModal={ closeModal } products={ activeProducts } /> }
        </main>
    );
}