import { createSlice, createSelector } from '@reduxjs/toolkit'

// Item shape: { id, name, price, image, qty }
const initialState = {
    items: []
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existing = state.items.find((i) => i.id === item.id)
            if (existing) {
                existing.qty += 1
            } else {
                state.items.push({ ...item, qty: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload)
        },
        updateQty: (state, action) => {
            const { id, qty } = action.payload
            const it = state.items.find((i) => i.id === id)
            if (it) it.qty = Math.max(1, qty)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})


export const { addToCart, removeFromCart, updateQty, clearCart } = slice.actions
export default slice.reducer


// Selectors
export const selectItems = (s) => s.cart.items
export const selectTotalItems = createSelector([selectItems], (items) =>
    items.reduce((sum, i) => sum + i.qty, 0)
)
export const selectTotalPrice = createSelector([selectItems], (items) =>
    items.reduce((sum, i) => sum + i.qty * i.price, 0)
)
export const isInCart = (id) => (s) => s.cart.items.some((i) => i.id === id)
