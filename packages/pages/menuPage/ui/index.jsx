import './index.css';
import { useState, useEffect } from 'react';
import { Header } from "@yumyumApp/header";
import { MenuList } from '@yumyumApp/menuList';

export const MenuPage = () => {
    return (
        <main className="page menu-page">
            <Header logo={true} cartClass={'outline'} />
            <MenuList />
        </main>
    );
}