import './index.css';
import { Icon } from "@yumyumApp/icon/ui";
import { CartIcon } from "@yumyumApp/cartIcon";

export const Header = ({logo, cartClass}) => {
    return (
        <header className="page__header">
            {<Icon logo={ logo } /> }
            {cartClass !== 'none' && <CartIcon cartClass={ cartClass } />}
        </header>
    );
}