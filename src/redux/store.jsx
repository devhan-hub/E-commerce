import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./slices/CartSlice"
const store = configureStore ({
    reducer:{
        cart:cartReducer,
    },
    devTools:true,
    

})

export default store;