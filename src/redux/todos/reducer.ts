import * as types from './action-types'

interface Action {
	type: string
	payload: any
}

interface InitialState {
	todos: any
	isLoading: boolean
  isError: boolean
  error: string
}

const initialState: InitialState = {
	todos: [],
	isLoading: false,
  isError: false,
  error: ''
}

export default function (state = initialState, action: Action) {
	switch (action.type) {
		case types.GET_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
        isError: false
			}
		case types.GET_TODOS_SUCCESS: 
			return {
				...state,
				todos: action.payload,
				isLoading: false,
        isError: false
			}
		case types.GET_TODOS_ERROR:
			return {
				...state,
				isLoading: false,
        isError: true,
			}
		default:
			return state
	}
}