import * as actions from "../actionCreater";
import { toast } from "react-toastify";

const apiErrors = (store) => (next) => (action) => {
    if (action.type === actions.apiCallFailed.type) {
        console.log("api call failed");
        toast.error("api call failed");

        return;
    }
    next(action);
};

export default apiErrors;