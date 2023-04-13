import { Link } from "react-router-dom";
import './welcome.css'

const Welcome = () => {

    return (
        <div className='welcome-container'>
            <h2 className='welcome-message'>Welcome to Doggy DayCare</h2>
            <Link to="/catalog" className="catalog">
                <button className='button'>Go to the catalog</button>
            </Link>
        </div>
    );
}

export default Welcome;