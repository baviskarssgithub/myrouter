import React from 'react';
import {Link, NavLink, BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ShopNav from './ShopNav';
import Cloth from './Cloth';
import Grossery from './Grossery'

function Shop() {    
    return (
        <div>
           <Router>
            <div className="Shop" style={{border:"solid 1px black"}}>
            <ShopNav/>
            <Switch>
                <Route path="/Shop/Grossery" component={Grossery} />
                <Route path="/Shop/Cloth" component={Cloth} />               
                <Route path="/Shop" exact component={Mybaseshop} />
            </Switch>
            </div>
            </Router>
        </div>
    );
}
const Mybaseshop = () =>(
    <div><h1>Shopping base page</h1><br/>
    <a href="/">go to parent page</a>
    </div>
  );

export default Shop;










