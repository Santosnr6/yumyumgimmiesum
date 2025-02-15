import './index.css';
import { useState, useEffect } from 'react';
import { Header } from "@yumyumApp/header";
import { MenuList } from '@yumyumApp/menuList';
import { Modal } from "@yumyumApp/modal";

export const MenuPage = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [activeProduct, setActiveProduct] = useState(null);

    const handleModalClick = (product) => {
        setDisplayModal(!displayModal);
        setActiveProduct(product);
    }

    const closeModal = (event) => { 
        if(event.target.tagName === 'HEADER' || event.target.tagName === 'MAIN' || event.target.tagName === 'H1' || event.target.tagName === 'IMG' || event.target.tagName === 'FIGURE' || event.target.tagName === 'BUTTON') {
            setDisplayModal(false);
        }
    }

    return (
        <main onClick={(event) => closeModal(event)} className="page menu-page">
            <Header logo={true} cartClass={'outline'} />
            <MenuList onClick={handleModalClick} />
            { displayModal && <Modal closeModal={ closeModal } product={ activeProduct } /> }
        </main>
    );
}