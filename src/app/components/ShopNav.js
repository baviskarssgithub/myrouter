import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function ShopNav() {
    const navstyle={
    color:'red'    
    };

    return (
        <nav >          
            <div>            
                <ul className="nav-links">
                    <li><NavLink to="/Shop/Grossery" style={navstyle}> Grossery</NavLink></li>
                    <li><NavLink to="/Shop/Cloth" style={navstyle}> Cloth</NavLink></li>
                </ul>   
            </div>                
        </nav>
    );
}

export default ShopNav;