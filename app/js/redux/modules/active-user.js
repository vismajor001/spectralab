
const UPDATE = 'USER_SELECTED';


// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case UPDATE:
            return action.payload;
            break;
    }
    return state;
}

// Action Creators
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: UPDATE,
        payload: user
    }
};
