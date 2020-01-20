import * as actionTypes from './user.types';
import axios from '../../axios';
import {UserActionTypes} from "./user.types";

const postUrl = 'http://192.168.1.37:5000/api/v1/user';
const getUrl = 'http://192.168.1.37:5000/api/v1/user/list';
// const getDataSuccess = (data) => dispatch => {
// //     console.log(data)
// //     dispatch({
// //         type: UserActionTypes.GET_DATA_SUCCESS,
// //         payload: data
// //     })
// // }

export const addData = () => dispatch =>
{
    axios.post(postUrl,data)
        .then(response => {
            console.log(response.data)
            dispatch({
                type: UserActionTypes.POST_DATA_SUCCESS,
                payload: response.data
            })
        }).catch(e => {

    })
}



export const getData = () => dispatch => {
    axios.get(getUrl)
        .then(response => {
            console.log('sss', response)
            dispatch({
                type: UserActionTypes.GET_DATA_SUCCESS,
                payload: response.data
            })
            // getDataSuccess(response.data)
        }).catch(e => {
    })
}
