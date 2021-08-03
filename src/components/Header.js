import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "../assets/css/Header.css";
const { Item } = Menu;

const Header = () => {
    return (
        <Menu className="menu">
            <Item className="item">
                <Link className="link" to="/">Home</Link>
            </Item>
            <Item className="item">
                <Link className="link" to="/search/beer/by/name">Search by Name</Link>
            </Item>
            <Item className="item">
                <Link className="link" to="/search/beer/by/id">Search by Id</Link>
            </Item>
            <Item className="item">
                <Link className="link" to="/search/random/beer">Random Search</Link>
            </Item>
        </Menu>
    )
}

export default Header;
