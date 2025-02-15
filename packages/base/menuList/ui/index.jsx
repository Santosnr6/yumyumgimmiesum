import "./index.css";
import { toUpper } from '@yumyumApp/utils';
import { useGetMenuQuery } from '@yumyumApp/api';
import { MenuListItem } from "@yumyumApp/menuListItem";
import { useEffect, useState } from "react";

export const MenuList = () => {
    const [food, setFood] = useState([]);
    const [dips, setDips] = useState([]);
    const { data, isError, isLoading } = useGetMenuQuery();
    
    useEffect(() => {
        if(!isLoading) {
            const foodItems = data.items.filter(i => i.type === 'wonton');
            const dipItems = data.items.filter(i => i.type === 'dip');
            setFood(foodItems);
            setDips(dipItems);
        }        
    }, [data]);

    useEffect(() =>{
        console.log(dips);
        
    }, [dips]);

    return (
        <section className="menu">
            <h1 className="menu__title">{toUpper('meny')}</h1>
            <ul className="menu__list">
                {
                    food?.map(item => {
                        return <MenuListItem key={ item.id } product={ item } />
                    })
                }
                <li className="menu__list-item">
                    <div className="menu__list-item-upper">
                        <p className="menu__list-item-name">{toUpper('dipsås')}</p>
                        <span className="menu__dots"></span>
                        <p className="menu__list-item-price">{`19 ${toUpper('sek')}`}</p>
                    </div>
                    <div className="menu__list-item-dips">
                        {
                            dips.map(dip => <span className="menu__list-item-dip">{dip.name}</span>)
                        }
                    </div>
                </li>
            </ul>
        </section>
    );
}