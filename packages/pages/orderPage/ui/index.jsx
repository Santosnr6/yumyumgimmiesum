import './index.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toUpper } from "@yumyumApp/utils";
import { useGetOrderQuery } from '@yumyumApp/api';
import { Header } from "@yumyumApp/header";
import { Button } from "@yumyumApp/button";
import boxtop from '/src/assets/boxtop.png';

export const OrderPage = () => {
    const { id } = useParams();
    const { data, isError, isLoading } = useGetOrderQuery(id, { skip: !id });
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log(data?.order);
    }, [data]);

    const calculateEta = () => {   
        console.log()
        if(!isLoading) {
            const timestampDate = new Date(data?.order.timestamp);
            const etaDate = new Date(data?.order.eta);
            const differenceMs = etaDate - timestampDate;
            return Math.floor(differenceMs / (1000 * 60));        
        } else {
            return 15;
        }
    }

    return (
        <main className="page order-page">
            <Header logo={ true } cartClass={'none'} />
            <section className="order-details">
                <img src={ boxtop } alt="Take Away Box" className="order-details__image" />
                <h1 className="order-details__msg">{toUpper('dina wontons tillagas!')}</h1>
                <p className="order-details__eta">{toUpper(`eta ${calculateEta()} min`)}</p>
                <p className="order-details__id">{toUpper(`#${data?.order.id}`)}</p>
            </section>
            <section className="order-page__btn-group">
                <Button text={ 'beställ mer' } onClick={ () => navigate('/') } type={ 'solid' } />
                <Button text={ 'se kvitto' } onClick={ () => navigate(`/receipt/${data?.order.id}`) } type={ 'outline' } />
            </section>
        </main>
    );
}