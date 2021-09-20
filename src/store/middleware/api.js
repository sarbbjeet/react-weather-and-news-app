import axios from "axios";
import * as actions from "../actionCreater";

const api = (store) => (next) => async(action) => {
    const { dispatch } = store;
    const { url, method, onSuccess, onFailed, data, onStart } = action.payload;
    next(action);
    if (action.type === actions.apiCallRequest.type) {
        if (onStart) dispatch({ type: onStart }); // loading spinner on
        try {
            const { data: response } = await axios.request({
                baseURL: "http://localhost:4000",
                url,
                method,
                data,
            });
            dispatch(actions.apiCallSuccess(response));
            if (onSuccess) dispatch({ type: onSuccess, payload: response });
        } catch (ex) {
            dispatch(actions.apiCallFailed(ex.message));
            console.log(ex.message);
            if (onFailed) dispatch({ type: onFailed, payload: ex.message });
        }
    }
};

export default api;