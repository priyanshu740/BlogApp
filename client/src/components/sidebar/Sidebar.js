import React from 'react'
import './sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className='sidebarItem'>
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className='sidebar-ul'>
                    <li className='sidebar-li'>life</li>
                    <li className='sidebar-li'>music</li>
                    <li className='sidebar-li'>sports</li>
                    <li className='sidebar-li'>styles</li>
                    <li className='sidebar-li'>tech</li>
                    <li className='sidebar-li'>movies</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US ON</span>
                <div className='sidebar-icons'>
                    <i className="sidebar-icon fab fa-facebook-square"></i>
                    <i className="sidebar-icon fab fa-instagram-square"></i>
                    <i className="sidebar-icon fab fa-pinterest-square"></i>
                    <i className="sidebar-icon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
