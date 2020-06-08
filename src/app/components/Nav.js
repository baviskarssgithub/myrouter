import React from 'react';
import '../../App.css';
import {Link, NavLink} from 'react-router-dom'


function Nav() {
    const navstyle={
    color:'red'    
    };

    return (
        <nav >
            <div style={{width:"100%",border:"solid 1px black;"}}>
            <div style={{width:"20%", float:"left"}}><h3>Logo</h3></div>
            <div style={{width:"79%", float:"left"}}>            
                <ul className="nav-links">
                    <li><NavLink to="/about" style={navstyle}> about</NavLink></li>
                    <li><NavLink to="/shop" style={navstyle}> shop</NavLink></li> 
                    <li><NavLink to="/Business" style={navstyle}> Business</NavLink></li> 
                </ul>   
            </div>
            <div style={{clear:"both"}}></div>
            </div>        
        </nav>
    );
}

export default Nav;