
import { user } from "@/lib/type/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: user = {
    token: 'notProvided',
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthReducer(state, action) {
            if(action.payload.token) {
           state.token = action.payload.token;
            }
        },
    }
})


export const { setAuthReducer } = authSlice.actions
export const authReducer = authSlice.reducer;