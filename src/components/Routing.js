import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddUser from "./addUser/addUser.component";
import UserList from "./userList/userList.component";
import EditUser from "./editUser/edit.component";
import HomePage from "../pages/homePage/homePage.component";
import NavBar from "./navbar/NavBar.component";

export default function RoutingComp() {
    return (<Router>
            <NavBar/>
            <div>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/user/add" component={AddUser}></Route>
                <Route exact path="/user/list" component={UserList}></Route>
                <Route exact path="/user/edit" component={EditUser} ></Route>
            </div>
        </Router>
    );
}



