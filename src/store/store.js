import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const initState = {
    user: {},
    token: '',
    cart : {},
    isAuthenticated : false
    
} 
// export const getToken = () => {
//     return {
//         type: 'GET_TOKEN',
//     }
// }
export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token,
    }
}
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    }
}
export const setAuth = (bool) => {
    return {
        type: 'SET_AUTH',
        payload: bool,
    }
}
export const setCart = (cart) => {
    return {
        type: 'SET_CART',
        payload: cart,
    }
}
const reducer = (state = initState, action) =>{
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'SET_AUTH':
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case 'SET_CART':
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }
}
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware()))

export default store;
