import React from "react";
import {addData} from "../../redux/user/user.action";

const AddUser = (props) => {
    let firstName, lastName,email, password = null;
    return(
        <form onSubmit = { e =>{
            e.preventDefault();

        }}></form>
    )
}
function handleChange(e){
    const newData = {...addData};
    newData[e.target.name] = e.target.value;


}
export default  AddUser