import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "news",
    initialState: {
        data: [],
        loading: false,
        cardHeaderArr: [],
    },
    reducers: {
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

const addCardHeader = (item) => slice.actions.cardHeaderAdded(item);

const updateCardHeaderState = (item) =>
    slice.actions.cardHeaderStateUpdated(item);

export default slice.reducer;
export { addCardHeader, updateCardHeaderState };