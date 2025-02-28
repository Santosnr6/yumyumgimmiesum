import './index.css';
import { useGetReceiptQuery } from '@yumyumApp/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from '@yumyumApp/header';
import { Button } from '@yumyumApp/button';
import { Receipt } from '@yumyumApp/receipt';

export const ReceiptPage = () => {
    const navigate = useNavigate();
    return (
        <main className="page receipt-page">
                    <Header logo={ true } cartClass={'none'} />
                    <Receipt />
                    <Button text={ 'gör en ny beställning' } onClick={ () => navigate('/') } type={ 'solid' } />
                </main>
    );
}