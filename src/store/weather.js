import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequest } from "./actionCreater";
const basicUrl = "https://api.openweathermap.org/data/2.5/weather?";
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
const loadApi = ({ lat, lng }) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const finalUrl = `${basicUrl}lat=${lat}&lon=${lng}&appId=${apiKey}`;

    return apiCallRequest({
        finalUrl,
        method: "get",
        data: {},
        onSuccess: slice.actions.apiLoaded.type,
    });
};

export { loadApi };