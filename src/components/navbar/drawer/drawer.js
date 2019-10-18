import React from 'react';
import "./drawer.css";

const Drawer = () => {

    return (
        <div>
            <nav className="sidedrawer">
              <ul>
                 <li><a href="/">Name</a></li>
                 <li><a href="/">Users</a></li>
              </ul>
            </nav>
        </div>
    );
};

export default Drawer;