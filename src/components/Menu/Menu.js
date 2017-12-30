import React from 'react';
import {NavLink} from 'react-router-dom'

import Styles from './styles/Menu.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    renderMenuItems() {
        const items = this.props.menuItems.map((menuItem, index) => (
            <li className="nav-item" key={menuItem.name}>
                <NavLink exact className="nav-link" to={menuItem.link}>{menuItem.name}</NavLink>
            </li>
        ));

        return items;
    }


    render() {

        return (
            <div className="container-menu col-2">
                <div className="container-logo">

                </div>

                <ul className="nav flex-column">
                    {this.renderMenuItems()}
                </ul>

            </div>
        )
    }

}

export default Menu;