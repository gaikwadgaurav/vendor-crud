import React from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (

        <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
                <Link componentclass={Link} href="/home" to="/home" eventkey="1">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/user/add" to="/user/add" eventkey="2">Add</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/user/list" to="/user/list" eventkey="3">List</Link>
            </Nav.Item>
            <Nav.Item>
                <Link componentclass={Link} href="/user/edit" to="/user/edit" eventkey="4">Edit</Link>
            </Nav.Item>
        </Nav>

    );
}

