import "./index.css";
import { toUpper } from '@yumyumApp/utils';

export const MenuSpecialListItem = ({name, price, items}) => {
    console.log(items);
    
    return (
        <li className="menu__list-item">
                    <div className="menu__list-item-upper">
                        <p className="menu__list-item-name">{toUpper(name)}</p>
                        <span className="menu__dots"></span>
                        <p className="menu__list-item-price">{`${price} ${toUpper('sek')}`}</p>
                    </div>
                    <div className="menu__list-item-specials">
                        {
                            items.map(item => <span key={ item.id } className="menu__list-item-special">{item.name}</span>)
                        }
                    </div>
                </li>
    );
}