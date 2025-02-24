import "./index.css";
import { toUpper } from '@yumyumApp/utils';
import { useGetMenuQuery } from '@yumyumApp/api';
import { MenuListItem } from "@yumyumApp/menuListItem";
import { MenuSpecialListItem } from "@yumyumApp/menuSpecialListItem";
import { useEffect, useState } from "react";

export const MenuList = ({ onClick }) => {
    const [food, setFood] = useState([]);
    const [dips, setDips] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const { data, isError, isLoading } = useGetMenuQuery();
    
    useEffect(() => {
        if(!isLoading) {
            const foodItems = data.items.filter(i => i.type === 'wonton');
            const dipItems = data.items.filter(i => i.type === 'dip');
            const drinkItems = data.items.filter(i => i.type === 'drink');
            setFood(foodItems);
            setDips(dipItems);
            setDrinks(drinkItems);
        }        
    }, [data]);
    
    return (
        <section className="menu">
            <h1 className="menu__title">{toUpper('meny')}</h1>
            <ul className="menu__list">
                {
                    food?.map(item => {
                        return <MenuListItem key={ item.id } product={ item } onClick={ onClick } />
                    })
                }
                {
                    dips && <MenuSpecialListItem name={ 'dippsås' } price={ 19 } items={ dips } onClick={ onClick } />
                }
                {
                    drinks && <MenuSpecialListItem name={ 'dryck' } price={ 25 } items={ drinks } onClick={ onClick } />
                }
            </ul>
        </section>
    );
}