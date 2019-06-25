const initialState = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    city: '',
    user_id: null,
    image: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}

function reducer(state = initialState, action){
    switch (action.type){
        case UPDATE_USER:
            // console.log(action.payload)
            const { username, first_name, last_name, email, city, user_id, image } = action.payload
            return { username, first_name, last_name, email, city, user_id, image }
            case CLEAR_USER:
                return { ...initialState }
                default:
                    return state
    }
}

export default reducer