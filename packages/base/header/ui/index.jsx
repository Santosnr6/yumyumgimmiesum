import './index.css';
import { Icon } from "@yumyumApp/icon/ui";
import { CartIcon } from "@yumyumApp/cartIcon";

export const Header = ({logo, cartClass}) => {
    return (
        <header className="page__header">
            { logo && <Icon /> }
            {cartClass !== 'none' && <CartIcon cartClass={ cartClass } />}
        </header>
    );
}