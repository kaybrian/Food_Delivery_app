import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addtoBaseket: (state, actions) => {
            state.items = [...state.items, actions.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newbasket = [...state.items]

            if (index >= 0) {
                newbasket.splice(index, 1)
            } else {
                console.warn("You can not remove that")
            }

            state.items = newbasket;
        },
    }
})


export const { addtoBaseket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = state => state.basket.items

export const selectedBasketItemWithId = (state, id) => state.basket.items.filter(
    (item) => item.id === id);

export const selectTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)
export default basketSlice.reducer
