import { toUpper } from '@yumyumApp/utils';
import './index.css';

export const Button = ({onClick, text, type}) => {
    return (
        <button onClick={ onClick } className={`button button--${type}`}>
            {toUpper(text)}
        </button>
    );
}