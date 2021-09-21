import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequest } from "./actionCreater";
const slice = createSlice({
    name: "weather",
    initialState: {
        data: {},
        loading: false,
    },
    reducers: {
        apiLoaded: (weather, action) => {
            weather.data = action.payload;
        },
    },
});

export default slice.reducer;
const loadApi = (Latlng) =>
    apiCallRequest({
        url: "/weather-api",
        method: "post",
        data: Latlng,
        onSuccess: slice.actions.apiLoaded.type,
    });

export { loadApi };