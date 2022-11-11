import { all } from "redux-saga/effects";

import todoSaga from "./todos/saga";

export default function* rootSaga() {
	yield all([
		...todoSaga
	])
}