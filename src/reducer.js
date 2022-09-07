export const getBasketTotal = (basket) => basket.reduce((amount, item) => amount + item.price, 0);

export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
        switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'BASK_ADD':
            return {
                ...state,
                basket: [...state.basket, action.item]
                };
        case 'BASK_REMOVE':
        let newBasket = [ ...state.basket];
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id);

        if (index >= 0) {
            newBasket.splice(index, 1);
        } else {
            console.error('Basket not found');
        }
            return {
                ...state,
                basket: newBasket,
                };
        default:
            return state;
        }
}

export default reducer;