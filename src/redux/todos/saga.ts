import * as type from './action-types'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTodos } from './api'

function* getAllTodos(): any {
  try {
    const todos = yield call(fetchTodos)
    yield put({
      type: type.GET_TODOS_SUCCESS,
      payload: todos.data
    })
  } catch (error: any) {
    yield put({type: type.GET_TODOS_ERROR, message: error.message})
  }
}

const todoSaga = [
  takeLatest(type.GET_TODOS_REQUEST, getAllTodos)
]

export default todoSaga