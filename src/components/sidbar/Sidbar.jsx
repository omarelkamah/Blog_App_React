import './sidbar.scss';

export default function Sidbar() {
  return (
    <div className="sidbar">
        <div className="itemSidbar">
             <h3 className="sidbarTitle">ABOUT ME</h3>
            <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
            />
            <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
        </div>
        <div className="itemSidbar">
            <h3 className="sidbarTitle inside">CATEGORIES</h3>
            <ul className="sidbarList">
                <li className="sidbarListItem">
                    Life
                </li>
                <li className="sidbarListItem">
                    Music
                </li>
                <li className="sidbarListItem">
                    Sport
                </li>
                <li className="sidbarListItem">
                    Style
                </li>
                <li className="sidbarListItem">
                    Tech
                </li>
                <li className="sidbarListItem">
                    Cinema
                </li>
            </ul>
        </div>
        <div className="itemSidbar">
            <h3 className="sidbarTitle inside">FOLLOW US</h3>
            <div className="icons">
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
        </div>
    </div>
  )
}
