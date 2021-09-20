import * as actions from "../actionCreater";

const apiErrors = (store) => (next) => (action) => {
    if (action.type === actions.apiCallFailed.type)
        console.log("api call failed");
    next(action);
};

export default apiErrors;