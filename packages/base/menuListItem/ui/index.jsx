import "./index.css";
import { toUpper, formatIngredients } from '@yumyumApp/utils';

export const MenuListItem = ({product, onClick}) => {
    
    return (
        <li className="menu__list-item" onClick={() => onClick(product)}>
            <div className="menu__list-item-upper">
                <p className="menu__list-item-name">{toUpper(product.name)}</p>
                <span className="menu__dots"></span>
                <p className="menu__list-item-price">{`${product.price} ${toUpper('sek')}`}</p>
            </div>
            <p className="menu__list-item-ingredients">{formatIngredients(product.ingredients)}</p>
        </li>
    );
}