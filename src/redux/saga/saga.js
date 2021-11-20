import { call, put } from "redux-saga/effects";
import { requestGetUser } from "./requestGetUser";
import { takeLatest } from "redux-saga/effects";
import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
} from "../../constant/constant";

 function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    yield put({ type: DATA_SUCCESS, data: response });
  } catch (error) {
    yield put({ type: DATA_ERROR, error: error });
  }
}

export default function* watcherSaga() {
  yield takeLatest(DATA_REQUEST, handleGetUser);
}
