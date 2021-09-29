import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequest } from "./actionCreater";
const basicUrl = "https://api.openweathermap.org/data/2.5/weather?";
const basicForcastUrl = process.env.REACT_APP_WEATHER_API_URL;
const slice = createSlice({
    name: "weather",
    initialState: {
        data: {},
        forcastingApi: {},
        loading: false,
    },
    reducers: {
        apiLoaded: (weather, action) => {
            weather.data = action.payload;
        },
        forcastingApiLoaded: (weather, action) => {
            weather.forcastingApi = action.payload;
        },
        //active state,  when user click on the day card.
        daySelected: (weather, action) => {
            const { id, active } = action.payload;
            weather.forcastingApi.daily = weather.forcastingApi.daily.map(
                (day, idx) =>
                idx === id ? {...day, active } : {...day, active: false }
            );
            // console.log("daySelected", weather.forcastingApi.daily[0].dt);
        },
    },
});

export default slice.reducer;
//current day api
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

//forcasting api such as weekly(7 days api)
const loadWeatherForcastingApi = ({ lat, lng }) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const finalUrl = `${basicForcastUrl}lat=${lat}&lon=${lng}&exclude=hourly,current&appId=${apiKey}`;
    console.log("final_utl=", finalUrl);
    return apiCallRequest({
        finalUrl,
        method: "get",
        data: {},
        onSuccess: slice.actions.forcastingApiLoaded.type,
    });
};

//card active or deactive
const selectDay = (id, active) => slice.actions.daySelected({ id, active });

//filter and get required api parameters
const getSelectiveApi = (data) => {
    let finalArguments = [];
    try {
        finalArguments.push(
            data.daily.map((d, idx) => {
                return {
                    dt: d.dt,
                    temp: d.temp.day,
                    press: d.pressure,
                    wind_speed: d.wind_speed,
                    icon: d.weather[0].icon,
                    description: d.weather[0].description,
                    rain: d.weather[0].main === "Rain" ? d.rain : 0,
                    clouds: d.clouds,
                    humidity: d.humidity,
                    main: d.weather[0].main,
                    id: idx,
                    active: !d.active ? false : true,
                };
            })
        );
        return finalArguments;
    } catch (ex) {
        console.log("Api error");
        return [];
    }
};

export { loadApi, loadWeatherForcastingApi, selectDay, getSelectiveApi };