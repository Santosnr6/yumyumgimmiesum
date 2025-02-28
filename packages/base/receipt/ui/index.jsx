import './index.css';
import { useGetReceiptQuery } from '@yumyumApp/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '/src/assets/logo.png'
import { toUpper } from '@yumyumApp/utils';
import { ReceiptListItem } from '@yumyumApp/receiptListItem';

export const Receipt = ({product}) => {
    const [receipt, setReceipt] = useState(null);
    const { id } = useParams();
    const { data, isError, isLoading } = useGetReceiptQuery(id, { skip: !id });
    
    useEffect(() => {
        if(!isLoading) {
            setReceipt(data.receipt);
        }
    }, [data]);
    useEffect(() => {

    }, [receipt]);

    return (
        <section className="receipt">
            <section className="receipt__top-container">
                <img className="receipt__logo" src={ logo } alt="" />
                <h1 className="receipt__title">{ toUpper('kvitto') }</h1>
                <h2 className="receipt__id">{receipt && `#${toUpper(receipt.id)}`}</h2>
                <ul className="receipt__list">
                    {
                        receipt && receipt.items.map(item => {
                            return <ReceiptListItem key={ item.id } item={ item } />
                        })
                    }
                </ul>
            </section>
            <section className="receipt__bottom-container">
                <div className="receipt__left-container">
                    <p className="receipt__total-text">{toUpper('totalt')}</p>
                    <p className="receipt__vat-text">inkl 20% moms</p>
                </div>
                <p className="receipt__sum">{toUpper(`101 sek`)}</p>
            </section>
        </section>
    );
}