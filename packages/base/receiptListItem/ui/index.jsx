import "./index.css";
import { toUpper } from '@yumyumApp/utils';


export const ReceiptListItem = ({item}) => {

    return (
        <li className="receipt__list-item">
            <div className="receipt__list-item-upper">
                <p className="receipt__list-item-name">{toUpper(item.name)}</p>
                <span className="receipt__dots"></span>
                <p className="receipt__list-item-price">{`${item.price} ${toUpper('sek')}`}</p>
            </div>
            <p className="receipt__list-item-ingredients">{`${item.quantity} stycken`}</p>
        </li>
    );
}