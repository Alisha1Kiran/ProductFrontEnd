import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from './../utils/StatusCode'

const initialState = {
    data : [],
    status : StatusCode.IDLE
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = StatusCode.ERROR;
        })
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    console.log("asa")
    const data = await fetch('https://productapi-vnxc.onrender.com/products')
    console.log("Data: ", data);
    const result = await data.json();
    return result;    
});