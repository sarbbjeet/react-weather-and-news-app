import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequest } from "./actionCreater";
import configData from "../config/default.json";

const newsApiUrl = configData.NEWS_API_URL;
const slice = createSlice({
    name: "news",
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        //fetched news from api server
        newsFetched: (news, action) => {
            // alert("hello");
            news.data = action.payload;
            news.loading = false;
        },
        loadingUpdated: (news, action) => {
            news.loading = action.payload;
        },
    },
});

//get request for news api based on category
const fetchNews = (name) => {
    const finalUrl = `${newsApiUrl}?category=${name}`;
    return apiCallRequest({
        finalUrl,
        method: "GET",
        data: {},
        onSuccess: slice.actions.newsFetched.type,
    });
};
const updateLoading = (status) => slice.actions.loadingUpdated(status);

export default slice.reducer;
export { fetchNews, updateLoading };