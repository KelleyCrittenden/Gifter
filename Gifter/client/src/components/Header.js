// Notice that instead of <a> tags to navigate we're using the <Link> component that we import from the react router.
// We can use the to attribute to specify where we want the link to take the user to. Let's add our new header component to our application.
// Before we do, let's think about where we should put it. We could put it in our ApplicationViews component, but remember that we want the header present on all routes.
//  For now let's put it in App.js above the ApplicationViews component.

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand">
                GiFTER
      </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Feed
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts/add" className="nav-link">
                        New Post
          </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;