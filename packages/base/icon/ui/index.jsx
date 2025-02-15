import "./index.css";
import { Link } from "react-router-dom";


export const Icon = () => {
    return (
        <Link to="/menu" className="link">
            <figure className="icon">
                <img src="./src/assets/yygs.png" alt="Page Logotype" className="icon__image" />
            </figure>
        </Link>
    );
}