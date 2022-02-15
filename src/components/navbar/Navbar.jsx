import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  const user = true;
    return (
    <div className="navbar">
        <div className="navbarLeft">
            <a href="google.com">
                <i className="navbarIcon fab fa-facebook-square"></i>
            </a>
            <a href="google.com">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="google.com">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="google.com">
                <i className="navbarIcon fab fa-pinterest-square"></i>
            </a>
            <a href="google.com">
                <i className="navbarIcon fab fa-twitter-square"></i>
            </a>
        </div>
        <div className="navbarCenter">
            <ul className="navbarList">
                <li className="navbarListItem">
                    <Link className='theLink' to="/">HOME</Link>
                </li>
                <li className="navbarListItem">
                    {user ? (
                        <Link className='theLink' to="/settings">
                            SETTINGS
                        </Link>
                    ) : ""}
                </li>
                <li className="navbarListItem">CONTACT</li>
                <li className="navbarListItem">
                    {user ? (
                        <Link className='theLink' to="/write">Write</Link>
                    ) : ""}
                </li>
                {user ? "" : <li>LOGOUT</li>}
            </ul>
        </div>
        <div className="navbarRight">
            {user ? (
                <Link to='/settings'>
                    <img
                        className="topImg"
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </Link>
            ) : (
                <ul className="navbarList">
                    <li className='navbarListItem'>
                        <Link className='theLink' to="/login">LOGIN</Link>
                    </li>
                </ul>
            )}
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
