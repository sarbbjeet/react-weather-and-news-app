import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import apiErrors from "./middleware/apiError";
import reducer from "./reducers";

const store = configureStore({
    reducer,
    middleware: [api, apiErrors],
});

export default store;