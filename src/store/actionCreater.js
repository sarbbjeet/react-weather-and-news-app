import { createAction } from "@reduxjs/toolkit";
const apiCallRequest = createAction("apiCallBegan");
const apiCallSuccess = createAction("apiCallSuccess");
const apiCallFailed = createAction("apiCallFailed");

export { apiCallRequest, apiCallSuccess, apiCallFailed };