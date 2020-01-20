import {UserActionTypes} from "./user.types";

const initialState = {
    userList: null,
}
const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.GET_DATA_SUCCESS:
            console.log(action)
            return {
                ...state,
                userList: action.payload
            };
        case UserActionTypes.POST_DATA_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case UserActionTypes.PUT_DATA_SUCCESS:
            return;
        case UserActionTypes.DELETE_DATA_SUCCESS:
            return;
        default:
            return state;
    }
}
export default userReducer;
