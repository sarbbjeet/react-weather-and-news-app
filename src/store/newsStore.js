import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequest } from "./actionCreater";
import configData from "../config/default.json";

const newsApiUrl = configData.NEWS_API_URL;
const slice = createSlice({
    name: "news",
    initialState: {
        data: [],
        loading: false,
        cardHeaderArr: [],
    },
    reducers: {
        //fetched news from api server
        newsFetched: (news, action) => {
            // alert("hello");
            news.data = action.payload;
        },
        //add news card header items such as Bussiness, sport etc
        //{id:1, name: "Bussiness", active: false}  // which button is pressed(active)
        cardHeaderAdded: (news, action) => {
            news.cardHeaderArr.push(action.payload);
        },
        cardHeaderStateUpdated: (news, action) => {
            const itemA = action.payload;
            news.cardHeaderArr = news.cardHeaderArr.map((itemx) =>
                itemx.id === itemA.id ?
                {...itemx, active: true } :
                {...itemx, active: false }
            );
        },
    },
});

//get request for news api based on category
const fetchNews = ({ name: topic }) => {
    let topicToLowerCase = topic.toLowerCase();
    //handle request by node server
    const finalUrl = `${newsApiUrl}?category=${topicToLowerCase}`;
    return apiCallRequest({
        finalUrl,
        method: "GET",
        data: {},
        onSuccess: slice.actions.newsFetched.type,
    });
};

const addCardHeader = (item) => slice.actions.cardHeaderAdded(item);

const updateCardHeaderState = (item) =>
    slice.actions.cardHeaderStateUpdated(item);

export default slice.reducer;
export { addCardHeader, updateCardHeaderState, fetchNews };