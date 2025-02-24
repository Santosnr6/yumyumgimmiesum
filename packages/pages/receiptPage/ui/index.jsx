import './index.css';
import { useGetReceiptQuery } from '@yumyumApp/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from '@yumyumApp/header';
import { Button } from '@yumyumApp/button';

export const ReceiptPage = () => {
    const [receipt, setReceipt] = useState(null);
    const { id } = useParams();
    const { data, isError, isLoading } = useGetReceiptQuery(id, { skip: !id });

useEffect(() => {
    if(!isLoading) {
        setReceipt(data.receipt);
        
    }
}, [data]);

    return (
        <main className="page receipt-page">
                    <Header logo={ true } cartClass={'none'} />
                    <Button text={ 'gör en ny beställning' } onClick={ () => navigate('/') } type={ 'solid' } />
                </main>
    );
}