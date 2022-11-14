import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: {
            'name' : 'null',
            'email' : 'null',
            'password' : 'null',
        }
        // value: 1,
    },

    reducers: {
        setNull: state => {
            state.value = {
                'name' : 'null',
                'email' : 'null',
                'password' : 'null',
            }
        },

        updateData: (state, action) => {
            state.value = {
                'name' : action.payload.name,
                'email' : action.payload.email,
                'password' : action.payload.password,
            }
        }

    }
})
// Action creators are generated for each case reducer function
export const { setNull, updateData } = counterSlice.actions

export default counterSlice.reducer
