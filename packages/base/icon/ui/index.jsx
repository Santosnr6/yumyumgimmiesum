import "./index.css";
import { Link } from "react-router-dom";


export const Icon = ({logo}) => {
    return (
        <Link to="/menu" className="link">
            <figure className="icon">
                {
                    logo ? 
                    <img src="./src/assets/yygs.png" alt="Page Logotype" className="icon__image" /> :
                    <i className="fa-solid fa-arrow-left icon__arrow"></i>
                }        
            </figure>
        </Link>
    );
}