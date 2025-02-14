import './index.css';
import { useState, useEffect } from 'react';
import { useGetMenuQuery } from '@yumyumApp/api';

export const MenuPage = () => {
    const { data, isError, isLoading } = useGetMenuQuery();

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <main className="page menu-page">
            <header className="page__header">
                
            </header>
        </main>
    );
}