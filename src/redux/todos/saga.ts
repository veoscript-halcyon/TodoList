import * as types from './action-types'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTodos, storeTodos, deleteTodos } from './api'
import { RequestReponse } from '../../helpers/Axios'

function* getAllTodoSaga(): any {
  try {
    const todos: RequestReponse = yield call(fetchTodos)
    yield put({
      type: types.GET_TODOS_SUCCESS,
      payload: todos.data
    })
  } catch (error: any) {
    yield put({type: types.GET_TODOS_ERROR, message: error.message})
  }
}

function* createTodoSaga(action: any): any {
  try {
    const { title, content } = action.payload

    const response: RequestReponse = yield call(storeTodos, {
      title,
      content
    })

    if (response.status === 201) {
      // sijay mu send sa data from FE to API
      yield put({
        type: types.CREATE_TODOS_SUCCESS,
        payload: {
          title: response.data.title,
          content: response.data.content
        }
      })

      // ijang ireset ang form states for id, title and content
      yield put({ type: types.RESET_TODO_FORM_STATE })

      const todos: RequestReponse = yield call(fetchTodos)

      if (todos.status === 200) {
        // iya ireceive balik ang todos gikan sa api para ma update ang todos na state padong sa FE
        yield put({
          type: types.GET_TODOS_SUCCESS,
          payload: {
            todos: todos.data
          }
        })
      } else {
        // kung naay error sa pag receive ug request sa api
        yield put({
          type: types.GET_TODOS_ERROR,
          payload: {
            error: 'Error fetching todo from api.'
          }
        })
      }
    } else {
      // kung naay error sa pag send ug request sa api sa pag create ug todo
      yield put({type: types.CREATE_TODOS_ERROR, message: 'Failed to create todo, try again.'})
    }
  } catch (error: any) {
    yield put({type: types.CREATE_TODOS_ERROR, message: error.message})
  }
}

function* deleteTodoSaga(action: any): any {
  try {
    const { id } = action.payload

    const response: RequestReponse = yield call(deleteTodos, { id })

    if (response.status === 201) {
      // sijay mu send sa data from FE to API para ma delete ang todo
      yield put({
        type: types.DELETE_TODOS_SUCCESS,
        payload: response.data.id
      })

      // ijang ireset ang form states for id, title and content
      yield put({ type: types.RESET_TODO_FORM_STATE })

      const todos: RequestReponse = yield call(fetchTodos)

      if (todos.status === 200) {
        // iya ireceive balik ang todos gikan sa api para ma update ang todos na state padong sa FE
        yield put({
          type: types.GET_TODOS_SUCCESS,
          payload: {
            todos: todos.data
          }
        })
      } else {
        // kung naay error sa pag receive ug request sa api
        yield put({
          type: types.GET_TODOS_ERROR,
          payload: {
            error: 'Error fetching todo from api.'
          }
        })
      }

    } else {
      // kung naay error sa pag send ug request sa api sa pag delete ug todo
      yield put({type: types.DELETE_TODOS_ERROR, message: 'Failed to create todo, try again.'})
    }
  } catch (error: any) {
    yield put({type: types.GET_TODOS_ERROR, message: error.message})
  }
}

const todoSaga = [
  takeLatest(types.GET_TODOS_REQUEST, getAllTodoSaga),
  takeLatest(types.CREATE_TODOS_REQUEST, createTodoSaga),
  takeLatest(types.DELETE_TODOS_REQUEST, deleteTodoSaga)
]

export default todoSaga