import { createSlice } from "@reduxjs/toolkit";
import { apiCallRequest } from "./actionCreater";

const newsApiUrl = "http://192.168.0.92:4000/news";
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
    // const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    //const finalUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=24dfe29c14eedb2b807ef5279935bad6&topic=${topicToLowerCase}`;
    // const finalUrl = `https://newsapi.org/v2/everything?q=${topicToLowerCase}&apiKey=3ff8bd9e1574417cb317ad7ef3af02bd`;
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