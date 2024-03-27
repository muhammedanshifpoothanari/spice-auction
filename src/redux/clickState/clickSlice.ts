import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    editUserId: '',
    source: '',
    destination: '',
    senderId: '',
    receiverId: ''
}

const clickStateSlice = createSlice({
    name: "clickState",
    initialState,
    reducers: {
        setClickStateReducer(state, action) {
            if(action.payload.editUserId) {
                state.editUserId = action.payload.editUserId;

            }
            if(action.payload.source) {
                state.source = action.payload.source;
            }
            if(action.payload.destination) {
                state.destination = action.payload.destination

            }
            if(action.payload.senderId) {
                state.senderId = action.payload.senderId

            }
            if(action.payload.receiverId) {
                state.receiverId = action.payload.receiverId

            }
        },
    }
})


export const { setClickStateReducer } = clickStateSlice.actions
export const clickReducer = clickStateSlice.reducer;