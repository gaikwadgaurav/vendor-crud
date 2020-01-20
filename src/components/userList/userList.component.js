import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from "react-redux";
import {getData} from "../../redux/user/user.action";
import Table from "react-bootstrap/Table";

const UserList = () => {
    const userList = useSelector(state => state.user.userList);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    },[]);

    const renderTable = userList && userList.length > 0 && userList.map((user,key) => {
        return(
            <>
                <tr key={key}>
                    <td>{user.firstName.toUpperCase()}</td>
                    <td>{user.lastName.toUpperCase()}</td>
                    <td>{user.email}</td>
                </tr>
            </>
        );
    });
    return (
        // <>
        //     {userList &&
        //     userList.length > 0 &&
        //     userList.map((data, key) => {
        //         return (
        //             <>
        //                 <div key={key}>{data.firstName}</div>
        //             </>
        //         )
        //     })
        //     }
        // </>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {renderTable}
            </tbody>
        </Table>
    )
}

// const mapDispatchToProps = dispatch => ({
//     getData: () => dispatch(getData())
// });

export default UserList




