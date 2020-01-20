import React from 'react';
import { useDispatch} from 'react-redux';
import {useSelector} from "react-redux";
import {getData} from "../../redux/user/user.action";

const UserList = () => {
    const userList = useSelector(state => state.user.userList);
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(getData())}>Get Data</button>
            {userList&&
                userList.length> 0&&
                userList.map((data,key)=>{
                   return( <div key={key}>{data.firstName}</div>
                   )
                })
            }
        </>
    )
}

// const mapDispatchToProps = dispatch => ({
//     getData: () => dispatch(getData())
// });

export default UserList




