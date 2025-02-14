import './index.css';
import { useState, useEffect } from 'react';
import { useGetMenuQuery } from '@yumyumApp/api';
import { Header } from "@yumyumApp/header";

export const MenuPage = () => {
    const { data, isError, isLoading } = useGetMenuQuery();

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <main className="page menu-page">
            <Header logo={true} cartClass={'outline'} />
        </main>
    );
}