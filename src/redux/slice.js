import { createSlice } from '@reduxjs/toolkit'

const initialStates = {
    value: [
        { id: 'id-1', name: 'Alyona Udod', number: '459-12-56' },
        { id: 'id-2', name: 'Dad', number: '443-89-12' },
        { id: 'id-3', name: 'Mom ❤', number: '645-17-79' },
        { id: 'id-4', name: 'Natalia Valko', number: '227-91-26' }
    ],
   
};

export const listContSlice = createSlice({
    
    name: 'contact',
    initialState : initialStates,
    reducers: {
        addNewContact: (state, action) => {
           state.value.push(action.payload)
        },
        deleteContact: (state, action) => {

        const idx = state.value.findIndex(el => el.id === action.payload)

        state.value.splice(idx, 1);
        },

    },
});

export const { addNewContact ,deleteContact,setFilter } = listContSlice.actions // той же екшн 

    